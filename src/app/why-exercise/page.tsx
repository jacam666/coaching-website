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
                <div className="w-full max-w-5xl mx-auto px-4">
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
                    <ul className="list-disc list-inside space-y-4 mx-4 text-gray-100 mb-6">
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
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-1.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                    Researchers said there is a great bond between regular exercises and human mood.<br /><br />
                    Aerobic exercises help you to release mood-lifting hormones, relieve stress, and give you a sense of well-being.<br /><br />
                    It balances your brain and pulls out the negative thoughts from your mind and inserts positivity.<br /><br />
                    Depression can cause many serious problems.<br />
                    So, it’s better to avoid these types of obstacles at the early stage of your life with physical activities.
                </p>
            </section>
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-sleep.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                     <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                         Regular exercises can make you sleep early, enjoy deep sleep, and wake less during the night.<br /><br />
                         A night of deep sleep is the necessity of your body—it helps you feel refreshed, stay active, and work with more energy and encouragement.<br /><br />
                         When you do some sort of physical movements, it will make you sleep faster compared to other days when you don’t perform any workout.<br /><br />
                         And we all know sleep is an essential part of your life to bring glow on your face, a healthy lifestyle, and enthusiasm to engage in your work.
                     </p>
            </section>
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-immunity.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                    A stronger immune system keeps the body safe from diseases.<br /><br />
                    The physical benefits of exercise can reduce the risk of certain serious health conditions such as diabetes, heart attack, and cancer.<br /><br />
                    It also makes you less likely to get common illnesses such as colds and flu.<br />
                    (A recent study has declared, colds last 43% longer for people who work out once a week).
                </p>
            </section>
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-thinking.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                    Science says less workout means your brain is more prone to serious problems.<br /><br />
                    There is great value in physical exercise—it can lessen memory problems like loss of memory in older people and minimize diseases like Alzheimer’s.<br /><br />
                    Physical exercise can strengthen the brain functionality of both younger and older people.<br /><br />
                    With a little effort, you’re capable of increasing the problem-solving skills in your mind.
                </p>
            </section>
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-weight.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                    Overweight people can’t survive for longer; they can easily be influenced by diseases that are caused due to their weight.<br /><br />
                    It’s better to control your weight if you want to stay healthy in your life.<br /><br />
                    Physical fitness is important for people of all ages, especially for obese people.
                </p>
            </section>
            <section className="w-full max-w-5xl mx-auto px-4 ">
                <Image
                    src="/images/why-exercise/fitness-fun.jpg"
                    alt="Benefits of Exercise"
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-xl mb-6 shadow-lg"
                />

                     <p className="max-w-5xl mx-auto text-lg lg:text-2xl px-4 mb-10 text-gray-100">
                         Physical exercise is not always hard to do; it gives you another kind of pleasantness.<br /><br />
                         Enjoy the outdoors and engage in activities that make you happy.<br /><br />
                         Your fitness can make you part of a passionate team like a dancer or soccer team, and you can even start your own fitness center.
                     </p>
            </section>
            <Footer />
        </main>
    )
}
