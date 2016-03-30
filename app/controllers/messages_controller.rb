class MessagesController < ApplicationController
  def create
    @message = Message.new params[:message]
    if @message.valid?
      # send email
      redirect_to new_message_path, notice: 'Mensaje enviado'
    else
      render :new
    end
  end

  def new
    @active_menu = "contact"
    @message = Message.new
  end

  def edit
    @active_menu = "contact"
    @message = Message.new params[:message]
  end
end
