class GameProductsController < ApplicationController
  before_action :find_game_product, only: [:show]

  def index
    @game_products = GameProduct.all
    render json: @game_products
  end

  def new
    @game_product = GameProduct.new
  end

  def create
    @game_product = GameProduct.create(game_product_params)
    if @game_product.save
      render json: @game_product, status: :accepted
    else
      render json: { errors: 'Failed to create GameProduct' }, status: :unprocessible_entity
    end
  end

  private

  def game_product_params
    params.require(:game_product).permit!
  end

  def find_game_product
    @game_product = GameProduct.find_by(params[:id])
  end

end
