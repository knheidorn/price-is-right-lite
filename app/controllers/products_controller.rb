class ProductsController < ApplicationController
  before_action :find_product, only: [:show]

  def index
    @products = Product.all
    render json: @products
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.create(product_params)
    if @product.save
      render json: @product, status: :accepted
    else
      render json: { errors: 'Failed to create Product' }, status: :unprocessible_entity
    end
  end

  private

  def product_params
    params.require(:product).permit!
  end

  def find_product
    @product = Product.find(params[:id])
  end

end
