import Image from "next/image";
import Link from "next/link";
//import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <main className="app-shell text-emerald-50/90">
            {/* Shared nav/header */}
            {/* <Header /> */}
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-12">
                <Container>
                    <div className="mb-8 flex justify-center lg:justify-start">
                        <p className="inline-flex rounded-full border border-amber-100/25 bg-amber-200/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-100/90">
                            Coach Profile
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        <div className="lg:col-span-7 space-y-6">
                            <div className="relative overflow-hidden rounded-3xl border border-amber-100/20 bg-white/6 p-6 md:p-8 backdrop-blur-xl shadow-[0_22px_50px_-30px_rgba(0,0,0,0.9)]">
                                <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-50">
                                    Meet Your Coach
                                </h1>
                                <p className="text-xl md:text-2xl text-emerald-100/90 max-w-3xl">
                                    I am Jamie Cameron, a passionate coach dedicated to helping you achieve your fitness goals.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="rounded-2xl border border-amber-100/20 bg-amber-200/10 px-4 py-4 text-center backdrop-blur-md">
                                    <p className="text-2xl font-bold text-amber-100">30+</p>
                                    <p className="text-xs uppercase tracking-wider text-emerald-100/80">Years</p>
                                </div>
                                <div className="rounded-2xl border border-amber-100/20 bg-amber-200/10 px-4 py-4 text-center backdrop-blur-md">
                                    <p className="text-2xl font-bold text-amber-100">Multi</p>
                                    <p className="text-xs uppercase tracking-wider text-emerald-100/80">Stage Wins</p>
                                </div>
                                <div className="rounded-2xl border border-amber-100/20 bg-amber-200/10 px-4 py-4 text-center backdrop-blur-md">
                                    <p className="text-2xl font-bold text-amber-100">ABPU</p>
                                    <p className="text-xs uppercase tracking-wider text-emerald-100/80">Record</p>
                                </div>
                                <div className="rounded-2xl border border-amber-100/20 bg-amber-200/10 px-4 py-4 text-center backdrop-blur-md">
                                    <p className="text-2xl font-bold text-amber-100">1:1</p>
                                    <p className="text-xs uppercase tracking-wider text-emerald-100/80">Coaching</p>
                                </div>
                            </div>

                            <div className="surface-card p-6 md:p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-emerald-100 mb-4">
                                    My Experience & Achievements
                                </h2>
                                <ul className="text-emerald-50/90 text-left space-y-3">
                                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300"></span>30 years of experience in fitness and bodybuilding</li>
                                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300"></span>Multiple bodybuilding competition wins</li>
                                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300"></span>Expert in dieting, body transformation, and muscle mass gain</li>
                                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300"></span>Competitor in powerlifting competitions</li>
                                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-amber-300"></span>ABPU M2 bench press British record holder</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative h-full rounded-3xl border border-amber-100/20 bg-white/6 p-4 md:p-5 backdrop-blur-xl shadow-[0_22px_50px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
                                <div className="pointer-events-none absolute -right-16 top-8 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
                                <Image
                                    src="/images/coaching-image-6.jpg"
                                    alt="Coach in gym"
                                    width={600}
                                    height={400}
                                    className="h-full min-h-[360px] w-full rounded-2xl object-cover border border-emerald-100/20"
                                />
                                <div className="absolute left-8 bottom-8 rounded-xl border border-amber-100/25 bg-black/45 px-4 py-3 backdrop-blur-md">
                                    <p className="text-xs uppercase tracking-[0.15em] text-amber-100/90">Coaching Focus</p>
                                    <p className="text-sm text-emerald-50">Strength, physique, and sustainable nutrition</p>
                                </div>
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
                                    className="w-full h-auto rounded-lg object-cover shadow-lg border border-amber-100/25"
                                />
                                <Image
                                    src="/images/coaching-image-5.jpg"
                                    alt="Bench press competition"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg object-cover shadow-lg border border-amber-100/25"
                                />
                            </div>
                            <div className="surface-card p-6 flex flex-col justify-center">
                                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/85 mb-3">Coaching Philosophy</p>
                                <p className="text-lg text-emerald-50/90 leading-relaxed">
                                    Results come from structure, consistency, and support. My coaching blends clear training progressions with realistic nutrition habits, so you can build strength and confidence without extremes.
                                </p>
                            </div>
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
