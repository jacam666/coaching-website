"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { meals } from "../data/meals";

export default function MealsPage() {
    // Track flipped state for all cards
    const [flippedArr, setFlippedArr] = useState(Array(meals.length).fill(false));

    const handleFlip = (idx: number, value: boolean) => {
        setFlippedArr((prev) => {
            const arr = [...prev];
            arr[idx] = value;
            return arr;
        });
    };

    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-green-400 via-green-300 to-green-500 text-white">
            <div className="px-4">
                <Navbar buttonColor="text-green-500 hover:text-green-300 focus:text-green-600" />
            </div>
            <section className="flex-1 py-10">
                <div className="max-w-4xl mx-auto px-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
                        Delicious & Nutritious: Healthy Meals That Break the Boring Mold
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
                    {meals.map((meal, idx) => (
                        <div key={meal.slug} className="relative w-full h-95" style={{ perspective: "1000px" }}>
                            <div className={`absolute inset-0 w-full h-full transition-transform duration-500 ${flippedArr[idx] ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                                {/* Front */}
                                <div className={`absolute inset-0 w-full h-full bg-white rounded-xl border border-green-700 shadow p-4 ${flippedArr[idx] ? "opacity-0" : "opacity-100"}`} style={{ backfaceVisibility: "hidden" }}>
                                    <img src={meal.image.src} alt={meal.image.alt} className="w-full h-48 object-cover rounded-md mb-4" />
                                    <div className="text-center bg-green-100 p-3 rounded-md overflow-auto">
                                        <h3 className="text-xl text-gray-900 font-semibold">{meal.title}</h3>
                                        <p className="text-md text-gray-900">Calories: {meal.kcal} kcal</p>
                                        <p className="text-md text-gray-900">Protein: {meal.protein} g</p>
                                        <p className="text-md text-gray-900">Carbs: {meal.carbs} g</p>
                                        <p className="text-md text-gray-900">Fat: {meal.fat} g</p>
                                    </div>
                                    <button
                                        className="absolute bottom-2 right-4 bg-green-500 text-white rounded-full p-2 m-2 shadow hover:bg-blue-900 transition"
                                        onClick={() => handleFlip(idx, true)}
                                        aria-label="Show ingredients"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                {/* Back */}
                                <div className={`absolute inset-0 w-full h-full bg-green-100 rounded-xl border border-blue-700 shadow p-4 flex flex-col justify-center items-center text-gray-900 overflow-auto ${flippedArr[idx] ? "opacity-100" : "opacity-0"}`} style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                                    <h3 className="text-lg font-semibold mb-2">Ingredients</h3 >
                                    <div>
                                    <ul className="text-gray-900 text-center">
                                        {meal.ingredients?.map((ing: string) => (
                                            <li key={ing}>{ing}</li>
                                        ))}
                                    </ul>
                                    </div>
                                    <button
                                        className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full p-2 m-2 shadow hover:bg-blue-900 transition"
                                        onClick={() => handleFlip(idx, false)}
                                        aria-label="Back to nutrition"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 rotate-180">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}       