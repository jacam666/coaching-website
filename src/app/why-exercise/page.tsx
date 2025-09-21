import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function WhyExercise() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-10">
                <div className="w-full md:text-center max-w-5xl mx-auto px-4">
                    <Image
                        src="/images/why-exercise/good-fitnees.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h2 className="text-2xl font-bold mb-6">
                        Why is exercise good for you?
                    </h2>
                    <h3 className="text-xl font-bold mb-4">
                        It prevents many health issues such as:
                    </h3>
                    <ul className="list-disc list-inside md:w-100 mx-auto text-start space-y-4 text-gray-100 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li>
                                High blood pressure
                            </li>
                            <li>
                                Falls
                            </li>
                            <li>
                                Arthritis
                            </li>
                            <li>
                                Anxiety and depression
                            </li>
                            <li>
                                Stroke
                            </li>
                            <li>
                                Types of cancer
                            </li>
                        </div>
                    </ul>
                </div>
            </section>
            <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <section className="w-full max-w-5xl mx-auto px-4 bg-blue-100 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-1.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Improves Your Mood</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        Researchers say there is a strong connection between regular exercise and mood.<br /><br />
                        Aerobic exercise helps release mood-lifting hormones, relieves stress, and gives you a sense of well-being.<br /><br />
                        It balances your mind, removes negative thoughts, and encourages positivity.<br /><br />
                        Depression can cause many serious problems. It’s best to prevent these obstacles early in life through physical activity.
                    </p>
                </section>
                <section className="w-full max-w-5xl mx-auto px-4 bg-green-100 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-sleep.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Helps You Sleep Better</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        Regular exercise can help you fall asleep earlier, enjoy deeper sleep, and wake less during the night.<br /><br />
                        A night of deep sleep is essential for your body—it helps you feel refreshed, stay active, and work with more energy and motivation.<br /><br />
                        Physical activity helps you fall asleep faster compared to days when you don’t exercise.<br /><br />
                        Sleep is essential for a healthy lifestyle, a glowing appearance, and enthusiasm for your daily activities.
                    </p>
                </section>
                <section className="w-full max-w-5xl mx-auto px-4 bg-red-100 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-immunity.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Boosts Your Immune System</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        A strong immune system keeps your body safe from disease.<br /><br />
                        Exercise can reduce the risk of serious health conditions such as diabetes, heart attack, and cancer.<br /><br />
                        It also makes you less likely to get common illnesses like colds and flu.<br />
                        (A recent study found that colds last 43% longer for people who exercise only once a week.)
                    </p>
                </section>
                <section className="w-full max-w-5xl mx-auto px-4 bg-yellow-100 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-thinking.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Strengthens Your Brain</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        Research shows that lack of exercise makes your brain more prone to serious problems.<br /><br />
                        Physical exercise can reduce memory problems in older adults and minimize the risk of diseases like Alzheimer’s.<br /><br />
                        Exercise can strengthen brain function in both younger and older people.<br /><br />
                        With a little effort, you can improve your problem-solving skills.
                    </p>
                </section>
                <section className="w-full max-w-5xl mx-auto px-4 bg-orange-100 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-weight.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Helps Control Your Weight</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        Overweight people are at higher risk for diseases related to excess weight.<br /><br />
                        It’s important to control your weight to stay healthy.<br /><br />
                        Physical fitness is important for people of all ages, especially those who are overweight.
                    </p>
                </section>
                <section className="w-full max-w-5xl mx-auto bg-fuchsia-100 px-4 p-8 ">
                    <Image
                        src="/images/why-exercise/fitness-fun.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-blue-400">Exercise Makes Life More Fun</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4  text-gray-900">
                        Physical exercise isn’t always hard; it can be enjoyable.<br /><br />
                        Enjoy the outdoors and participate in activities that make you happy.<br /><br />
                        Your fitness can help you join passionate groups, such as dance or sports teams, or even start your own fitness center.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    )
}
