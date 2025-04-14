import React from "react";
import { useParams } from "react-router-dom";
import { products2 } from "../../data/products2";
import { products3 } from "../../data/products3";
import { products4 } from "../../data/products4";
import { products5 } from "../../data/products5";
import { products6 } from "../../data/products6";
import { useCart } from "../../context/CartContext";

const productGroups = [products2, products3, products4, products5, products6];

const ProductDetails = () => {
  const { index } = useParams();
  const groupIndex = parseInt(index) - 1;
  const productData = productGroups[groupIndex] || [];
  const { addToCart } = useCart();

  if (!productData.length) {
    return (
      <p className="text-center mt-20">No products found for this group.</p>
    );
  }

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <h1 className="text-center text-3xl font-bold mb-6">Product Details</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {productData.map((product) => (
            <div key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.color}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{product.rating}</span>
                </div>

                <div className="mt-3 flex flex-center gap-2">
                  <button
                    className="bg-gradient-to-r from-yellow-300 to-yellow-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-md"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105duration-200 text-white py-2 px-2 rounded-md"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
