class Api::UsersController < ApplicationController

  # GET /tasks
  def index
    # 後々のため、更新順で返します
    @users = User.order('updated_at DESC')
  end

  # POST /tasks
  def create
    @user = User.new(user_params)

    if @user.save
      render :show, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.fetch(:user, {}).permit(
          :firstname, :lastname, :birthmonth, :birthday, :nickname
      )
    end
end
