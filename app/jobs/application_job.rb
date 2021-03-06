class ApplicationJob < ActiveJob::Base
	queue_as :default

  def perform user
    @user = user
    UserMailer.sample_email(@user).deliver_later
  end
end
