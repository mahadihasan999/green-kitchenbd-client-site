import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ image, name,price, details , category}) => {
    const navigate= useNavigate()

    const handleRoute = () => {
        navigate(`/foods/${name}`);
    }
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{category.name}</span>
            <img className="w-96 h-96 mx-auto transform transition duration-300 hover:scale-105 " src={`https://res.awcbd.org/storage/menu/${image}`} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{name}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{details}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">৳{price}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Order Now</button>
            </div>
        </div>
    )
}

export default FoodItem
