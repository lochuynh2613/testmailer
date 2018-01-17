namespace :listuser do
	desc "This is my first rails app"
	task :getmail, [:username] => [:environment] do |t, args|
		@username = args.username.split(';')
		puts "username  |  email"
		# binding.pry
		users = User.where(name: @username)	
		users.each do |user|
			puts user.name + "  |  " + user.email
		end
    end
end