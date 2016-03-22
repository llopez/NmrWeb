class PagesController < ApplicationController
  def index
    @active_menu = "home"
  end

  def classes
    @active_menu = "classes"
  end

  def where_are_we
    @active_menu = "where_are_we"
  end

  def contact
    @active_menu = "contact"
  end
end
