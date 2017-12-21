require 'rails_helper'

RSpec.describe 'Authorization' do
  context 'with an unauthorized user' do
    let(:user) { FactoryBot.create(:user) }

    context 'when visiting a restricted page like GET /site/edit' do
      include_examples 'renders page not found'
    end
  end
end
