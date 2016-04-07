require 'rails_helper'

RSpec.describe ValidateDataJob do
  context 'with no data' do
    it 'does not send an email' do
      described_class.perform_now

      expect(ActionMailer::Base.deliveries.size).to eq 0
      Delayed::Worker.new.work_off
      expect(ActionMailer::Base.deliveries.size).to eq 0
    end
  end

  context 'with valid data' do
    let!(:sysadmin) { FactoryGirl.create(:sysadmin) }
    let!(:site) { FactoryGirl.create(:site) }

    it 'does not send an email' do
      described_class.perform_now

      expect(ActionMailer::Base.deliveries.size).to eq 0
      Delayed::Worker.new.work_off
      expect(ActionMailer::Base.deliveries.size).to eq 0
    end

    context 'with invalid data' do
      let!(:page) do
        FactoryGirl.create(:page).tap do |page|
          page.update_attribute(:url, 'login')
        end
      end

      let!(:message) do
        FactoryGirl.create(:message).tap do |message|
          message.update_attribute(:name, 'y')
        end
      end

      it 'sends an email' do
        described_class.perform_now

        expect(ActionMailer::Base.deliveries.size).to eq 0
        Delayed::Worker.new.work_off
        expect(ActionMailer::Base.deliveries.size).to eq 1

        expect(ActionMailer::Base.deliveries.last.body.to_s).to eq <<EOF
The following models had errors

Message##{message.id}: Name is too short (minimum is 3 characters)
Page##{page.id}: Url is reserved
EOF
      end
    end
  end
end
