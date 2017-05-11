class WelcomeController < ApplicationController
  def index
    @doctor = Doctor.new
  end

end
