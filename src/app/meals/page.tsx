"use client";
import React, { useState } from "react";
import Image from "next/image";
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
        <main className="app-shell text-emerald-50/90">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-10">
                <div className="max-w-4xl mx-auto px-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-100 mb-2">
                        Delicious & Nutritious: Healthy Meals That Break the Boring Mold
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4">
                    {meals.map((meal, idx) => (
                        <div key={meal.slug} className="relative w-full h-95" style={{ perspective: "1000px" }}>
                            <div className={`absolute inset-0 w-full h-full transition-transform duration-500 ${flippedArr[idx] ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                                {/* Front */}
                                <div className={`absolute inset-0 w-full h-full rounded-xl border border-emerald-100/20 bg-emerald-950/60 shadow-xl p-4 backdrop-blur-sm ${flippedArr[idx] ? "opacity-0" : "opacity-100"}`} style={{ backfaceVisibility: "hidden" }}>
                                    <Image src={meal.image.src} alt={meal.image.alt} width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
                                    <div className="text-center bg-black/15 border border-emerald-100/15 p-3 rounded-md overflow-auto">
                                        <h3 className="text-xl text-emerald-50 font-semibold">{meal.title}</h3>
                                        <p className="text-md text-emerald-50/90">Calories: {meal.kcal} kcal</p>
                                        <p className="text-md text-emerald-50/90">Protein: {meal.protein} g</p>
                                        <p className="text-md text-emerald-50/90">Carbs: {meal.carbs} g</p>
                                        <p className="text-md text-emerald-50/90">Fat: {meal.fat} g</p>
                                    </div>
                                    <button
                                        className="absolute bottom-2 right-4 bg-emerald-500 text-white rounded-full p-2 m-2 shadow hover:bg-emerald-400 transition"
                                        onClick={() => handleFlip(idx, true)}
                                        aria-label="Show ingredients"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                {/* Back */}
                                <div className={`absolute inset-0 w-full h-full rounded-xl border border-emerald-100/20 bg-emerald-900/60 shadow p-4 flex flex-col justify-center items-center text-emerald-50 overflow-auto backdrop-blur-sm ${flippedArr[idx] ? "opacity-100" : "opacity-0"}`} style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                                    <h3 className="text-lg font-semibold mb-2">Ingredients</h3 >
                                    <div>
                                    <ul className="text-emerald-50/90 text-center">
                                        {meal.ingredients?.map((ing: string) => (
                                            <li key={ing}>{ing}</li>
                                        ))}
                                    </ul>
                                    </div>
                                    <button
                                        className="absolute bottom-4 right-4 bg-emerald-500 text-white rounded-full p-2 m-2 shadow hover:bg-emerald-400 transition"
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