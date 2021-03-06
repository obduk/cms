require 'rails_helper'

RSpec.describe Types::TotalCountConnection do
  subject(:result) { GraphqlSchema.execute(query, context: context) }

  let(:site) { FactoryBot.create(:site) }
  let(:user) { FactoryBot.build(:user, site: site) }
  let(:context) { { user: user, site: site } }

  let!(:message1) { FactoryBot.create(:message, site: site) }
  let!(:message2) { FactoryBot.create(:message, site: site) }

  let(:query) do
    <<~BODY
      query {
        messages(first: 2, orderBy: {field: CREATED_AT, direction: ASC}) {
          nodes {
            name
          }
          totalCount
        }
      }
    BODY
  end

  let(:expected_result) do
    [
      {
        'messages' => {
          'nodes' => [
            { 'name' => message1.name },
            { 'name' => message2.name }
          ],
          'totalCount' => 3
        }
      }
    ]
  end

  before do
    FactoryBot.create(:message, site: site)
    FactoryBot.create(:message)
  end

  it 'returns total count' do
    expect(result.values).to eq expected_result
  end
end
