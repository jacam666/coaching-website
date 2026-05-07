import Image from "next/image";
import Link from "next/link";
//import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <main className="flex flex-col min-h-screen text-green-900">
            {/* Shared nav/header */}
            {/* <Header /> */}
            <div className="px-4">
                <Navbar buttonColor="text-green-400 hover:text-green-300 focus:text-green-600" />
            </div>
            <section className="flex-1 py-12">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-green-950">
                        Meet Your Coach
                    </h1>
                    <p className="text-xl md:text-2xl text-center text-green-900 mb-8 max-w-3xl mx-auto">
                        I am Jamie Cameron a passionate coach dedicated to helping you achieve your fitness goals.
                    </p>
                    <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-12">
                        {/* Profile image */}
                        {/* <div>
                            <Image
                                src="/images/coaching-image-2.jpg"
                                alt="Coach portrait"
                                width={200}
                                height={200}
                                priority
                                className="w-36 h-60 rounded-xl object-contain border border-blue-700 shadow-lg"
                            />
                        </div> */}
                        {/* Intro & achievements */}
                        <div>
                            <div className="surface-card p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
                                    My Experience & Achievements
                                </h2>
                                <ul className="text-green-900 text-left list-disc list-inside space-y-2">
                                    <li>30 years of experience in fitness and bodybuilding</li>
                                    <li>Multiple bodybuilding competition wins</li>
                                    <li>Expert in dieting, body transformation, and muscle mass gain</li>
                                    <li>Competitor in powerlifting competitions</li>
                                    <li>ABPU M2 bench press British record holder</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="grid grid-cols-1 gap-6">
                                <Image
                                    src="/images/coaching-image-4.jpg"
                                    alt="Stage Image"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg object-cover shadow-lg border border-green-200"
                                />
                                <Image
                                    src="/images/coaching-image-5.jpg"
                                    alt="Bench press competition"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg object-cover shadow-lg border border-green-200"
                                />
                            </div>
                            <Image
                                src="/images/coaching-image-6.jpg"
                                alt="Coach in gym"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg object-cover shadow-lg border border-green-200"
                            />
                        </div>
                    </section>
                    <div className="text-center mt-10">
                        <Link
                            href="/contact"
                            className="btn-primary inline-block text-lg"
                        >
                            Book Your Free Consultation
                        </Link>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
    );
}
