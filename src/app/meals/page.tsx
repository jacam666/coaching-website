import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { meals } from "../data/meals";

export default function MealsPage() {

    const mealList = meals.map((meal) => (
        <div key={meal.slug} className="rounded-xl border border-blue-700 bg-white p-4 shadow hover:scale-105 transform transition duration-200">
            <img src={meal.image.src} alt={meal.image.alt} className="w-full h-48 object-fill rounded-md mb-4" />
            <div className="text-center bg-gray-800 p-3 rounded-md">
                <h3 className="text-lg font-semibold">{meal.title}</h3>
                <p className="text-sm text-gray-400">Calories: {meal.kcal} kcal</p>
                <p className="text-sm text-gray-400">Protein: {meal.protein} g</p>
                <p className="text-sm text-gray-400">Carbs: {meal.carbs} g</p>
                <p className="text-sm text-gray-400">Fat: {meal.fat} g</p>
            </div>
        </div>
    ));

    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-4 gap-4">
                    {mealList}
                </div>
            </section>
            <Footer />
        </main>
    );
}       