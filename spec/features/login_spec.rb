require 'rails_helper'

RSpec.feature 'Login' do
  scenario 'with site user' do
    login_with_omniauth_as(site_user)
    visit '/login'

    expect(page).to have_content 'Signed in successfully'
  end

  scenario 'with admin user' do
    login_with_omniauth_as(admin_user)
    visit '/login'

    expect(page).to have_content 'Signed in successfully'
  end

  scenario 'with another sites user' do
    login_with_omniauth_as(user)
    visit '/login'

    expect(page).to have_content 'Error signing in'
  end

  scenario 'when error' do
    OmniAuth.config.mock_auth[:'cognito-idp'] = :invalid_credentials
    visit '/login'

    expect(page).to have_content 'Error signing in'
  end

  context 'with a new site' do
    let(:environment_variables) do
      {
        'DEFAULT_SITE_EMAIL' => new_email
      }
    end

    before do
      site.destroy!
    end

    scenario 'creating a new site' do
      login_with_omniauth_as(admin_user)

      expect { visit '/login' }.to change(Site, :count).from(0).to(1)

      expect(Site.last.email).to eq new_email
      expect(page).to have_content 'New Site'
      expect(page).to have_content 'Signed in successfully'
    end
  end
end
