class GamesController < ApplicationController
  before_action :find_game, only: [:show]

  def index
    @games = Game.all
    render json: @games
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
    @game = Game.find_by(params[:id])
  end

end
