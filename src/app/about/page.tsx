import Image from "next/image";
import Header from "../components/Header";
import Container from "../components/Container";

export default function About() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            {/* Shared nav/header */}
            <Header />

            <section className="flex-1 py-10">
                <Container>
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-center">So who am i?</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                        {/* Profile image */}
                        <div>
                            <Image
                                src="/images/coaching-image-2.jpg"
                                alt="Coach portrait"
                                width={200}
                                height={200}
                                priority
                                className="w-48 h-48 rounded-full object-cover border-4 border-blue-700 shadow-lg"
                            />
                        </div>


                        {/* Intro & achievements */}
                        <div>
                            <p className="text-lg text-gray-300 mb-6">
                                I am Jamie Cameron a passionate coach dedicated to helping you achieve your fitness goals.
                            </p>

                            <div className="bg-gray-900 rounded-xl border border-blue-700 p-6 shadow mb-4">
                                <h2 className="text-2xl font-bold text-blue-400 mb-2">
                                    My Experience & Achievements
                                </h2>
                                <ul className="text-gray-200 text-left list-disc list-inside space-y-2">
                                    <li>30 years of experience in fitness and bodybuilding</li>
                                    <li>Multiple bodybuilding competition wins</li>
                                    <li>Expert in dieting, body transformation, and muscle mass gain</li>
                                    <li>Competitor in powerlifting competitions</li>
                                    <li>ABPU M4 110KG bench press British record holder</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <Image
                                src="/images/coaching-image-4.jpg"
                                alt="Coach working with client"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg object-cover border-2 border-blue-700 shadow-lg"
                            />
                            <Image
                                src="/images/coaching-image-5.jpg"
                                alt="Coach working with client"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg object-cover border-2 border-blue-700 shadow-lg"
                            />
                            <Image
                                src="/images/coaching-image-6.jpg"
                                alt="Coach working with client"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg object-cover border-2 border-blue-700 shadow-lg"
                            />
                        </div>
                    </section>
                    <div className="text-center mt-10">
                        <a
                        href="#contact"
                        className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-900 transition border-2 border-blue-700 hover:border-blue-400"
                    >
                        Book Your Free Consultation
                    </a>
                    </div>
                </Container>
            </section>
        </main>
    );
}
