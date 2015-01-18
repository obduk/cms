require 'rails_helper'

RSpec.describe '/users', type: :feature do
  describe '/index' do
    let(:go_to_url) { '/site/users' }

    it_behaves_like 'restricted page'

    it_behaves_like 'logged in user' do
      it 'has list of users' do
        within '#main_article' do
          expect(page).to have_content 'Users'
          expect(page).to have_selector 'h1 .glyphicon-group'

          expect(page).to have_content 'Email'
          expect(page).to have_content user.email
          expect(page).to have_content site.users.second.email
        end
      end

      it 'has link in topbar' do
        visit_page '/home'

        within '#topbar' do
          click_link 'Users'
        end

        expect(current_path).to eq go_to_url
      end
    end
  end

  describe '/edit' do
    let(:go_to_url) { '/users/edit' }

    it_behaves_like 'restricted page'

    it_behaves_like 'logged in user' do
      it 'has icon' do
        expect(page).to have_selector 'h1 .glyphicon-user'
      end

      it 'updates user' do
        expect(find_field('Current password')['autofocus']).to eq 'autofocus'
        expect(find_field('Password').value).to be_nil
        expect(find_field('Confirm password').value).to be_nil
        expect(find_field('Email').value).to eq user.email

        within 'a[href="https://www.gravatar.com"]' do
          gravatar_image = find('img')

          expect(gravatar_image['src']).to eq user.gravatar_url(size: 150)

          expect(gravatar_image['alt']).to eq 'Profile Image'
          expect(gravatar_image['width']).to eq '150'
          expect(gravatar_image['height']).to eq '150'
        end

        fill_in 'Current password', with: user.password
        fill_in 'Password', with: new_password
        fill_in 'Confirm password', with: new_password
        fill_in 'Email', with: " #{new_email} "
        click_button 'Update User'

        it_should_be_on_home_page

        it_should_have_success_alert_with(
          'Your account has been updated successfully.'
        )

        found_user = User.find(user.id)
        expect(found_user.email).to eq new_email

        visit '/logout'
        visit_page '/login'

        fill_in 'Email', with: new_email
        fill_in 'Password', with: new_password

        click_button 'Login'

        it_should_be_on_home_page
      end

      it 'fails when no current password is given' do
        fill_in 'Email', with: new_email

        click_button 'Update User'

        it_should_have_form_error "can't be blank"
      end

      it 'fails with invalid data' do
        fill_in 'Current password', with: user.password
        fill_in 'Email', with: ''

        click_button 'Update User'

        it_should_have_form_error "can't be blank"
      end

      it 'has cancel button' do
        click_link 'Cancel'
        it_should_be_on_home_page
      end

      it 'has link in topbar' do
        visit_page '/home'

        within('#topbar') do
          click_link 'User Settings'
        end

        expect(current_path).to eq go_to_url
      end
    end
  end
end
