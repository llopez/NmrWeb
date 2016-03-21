class PagesController < ApplicationController

  def index
    @active_menu = "home"
  end

  def classes
    @active_menu = "classes"
  end
end
