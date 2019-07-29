class GamesController < ApplicationController
  before_action :find_game, only: [:show, :update]

  def index
    @games = Game.all
    render json: @games
  end

  def show
    render json: @game, status: :accepted
  end

  def update
    @game.update(game_params)
   if @game.save
     render json: @game, status: :accepted
   else
     render json: { errors: 'failed to update game' }, status: :unprocessible_entity
   end
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.create(game_params)
    if @game.save
      render json: @game, status: :accepted
    else
      render json: { errors: 'Failed to create Game' }, status: :unprocessible_entity
    end
  end

  private

  def game_params
    params.require(:game).permit!
  end

  def find_game
    @game = Game.find(params[:id])
  end

end
