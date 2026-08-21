import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function WhyExercise() {
    return (
        <main className="app-shell text-emerald-50/90">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-12">
                <div className="w-full md:text-center max-w-5xl mx-auto px-4 surface-card py-8 md:py-10">
                    <Image
                        src="/images/why-exercise/good-fitnees.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-emerald-50">
                        Why is exercise good for you?
                    </h1>
                    <h3 className="text-xl font-bold mb-4 text-emerald-100">
                        It prevents many health issues such as:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside md:max-w-2xl mx-auto text-start text-emerald-50/90">
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
                    </ul>
                </div>
            </section>
            <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full pb-10">
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-1.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Improves Your Mood</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
                        Researchers say there is a strong connection between regular exercise and mood.<br /><br />
                        Aerobic exercise helps release mood-lifting hormones, relieves stress, and gives you a sense of well-being.<br /><br />
                        It balances your mind, removes negative thoughts, and encourages positivity.<br /><br />
                        Depression can cause many serious problems. It’s best to prevent these obstacles early in life through physical activity.
                    </p>
                </section>
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-sleep.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Helps You Sleep Better</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
                        Regular exercise can help you fall asleep earlier, enjoy deeper sleep, and wake less during the night.<br /><br />
                        A night of deep sleep is essential for your body—it helps you feel refreshed, stay active, and work with more energy and motivation.<br /><br />
                        Physical activity helps you fall asleep faster compared to days when you don’t exercise.<br /><br />
                        Sleep is essential for a healthy lifestyle, a glowing appearance, and enthusiasm for your daily activities.
                    </p>
                </section>
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-immunity.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Boosts Your Immune System</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
                        A strong immune system keeps your body safe from disease.<br /><br />
                        Exercise can reduce the risk of serious health conditions such as diabetes, heart attack, and cancer.<br /><br />
                        It also makes you less likely to get common illnesses like colds and flu.<br />
                        (A recent study found that colds last 43% longer for people who exercise only once a week.)
                    </p>
                </section>
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-thinking.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Strengthens Your Brain</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
                        Research shows that lack of exercise makes your brain more prone to serious problems.<br /><br />
                        Physical exercise can reduce memory problems in older adults and minimize the risk of diseases like Alzheimer’s.<br /><br />
                        Exercise can strengthen brain function in both younger and older people.<br /><br />
                        With a little effort, you can improve your problem-solving skills.
                    </p>
                </section>
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-weight.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Helps Control Your Weight</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
                        Overweight people are at higher risk for diseases related to excess weight.<br /><br />
                        It’s important to control your weight to stay healthy.<br /><br />
                        Physical fitness is important for people of all ages, especially those who are overweight.
                    </p>
                </section>
                <section className="w-full surface-card p-8">
                    <Image
                        src="/images/why-exercise/fitness-fun.jpg"
                        alt="Benefits of Exercise"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-xl mb-6 shadow-lg border border-emerald-100/20"
                    />

                    <h3 className="text-2xl font-bold mb-4 text-emerald-100">Exercise Makes Life More Fun</h3>

                    <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 text-emerald-50/90">
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
