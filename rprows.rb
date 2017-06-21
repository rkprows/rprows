require 'sinatra'
require 'pony'
get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/projects' do
  erb :projects
end

get '/resume' do
  erb :resume
end

get '/contact' do
  erb :contact
end

get'/success' do
  erb :success
end
post '/contact' do 
  configure_pony
  name = params[:name]
  sender_email = params[:email]
  message = params[:message]
  logger.error params.inspect
  begin
    Pony.mail(
      :from => "#{name}<#{sender_email}>",
      :to => 'rachel.prows@com',
      :subject =>"#{name} has contacted you",
      :body => "#{message}",
    )
    redirect '/success'
  rescue
    @exception = $!
    erb :boom
  end
end

def configure_pony
  Pony.options = {
    :via => :smtp,
    :via_options => { 
      :address              => 'smtp.mail.me.com', 
      :port                 => '587',  
      :user_name            => ENV['ICLOUD_USERNAME'], 
      :password             => ENV['ICLOUD_PASSWORD'], 
      :authentication       => :plain, 
      :enable_starttls_auto => true,
      :domain               => 'heroku.com'
    }    
  }
end


