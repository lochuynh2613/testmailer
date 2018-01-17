class UserMailer < ApplicationMailer
	default from: 'niemanvui221296@gmail.com'
 
  def welcome_email user
    @user = user
    mail to: @user.email, subject: "Sample Email"
  end
 
  def edit_email user
    @user = user
    mail to: @user.email, subject: "your infomation was changed"
  end

end