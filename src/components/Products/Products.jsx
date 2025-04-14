import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { products1 } from "../../data/products1";

const Products = () => {
  const navigate = useNavigate();
  const currentProducts = products1;

  const handleProductClick = (index) => {
    navigate(`/product-details/${index + 1}`); 
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Here Your Products Order Now</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem debitis dicta</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(index)}
              className="cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
      </div>
    </div>
  );
};

export default Products;
