class PagesController < ApplicationController

  def index
  end

  def page
    render layout: 'page'
  end
end
