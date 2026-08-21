
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
    return (
        <main className="app-shell text-emerald-50/90">
            <div className="px-4">
                <Navbar />
            </div>
            {/* section for Online Coaching description */}
            <section className="py-12 flex flex-col items-center justify-center gap-8 w-full px-4 max-w-5xl mx-auto">
                <div className="w-full">
                    <div className="relative overflow-hidden rounded-3xl border border-emerald-100/20 bg-white/6 p-6 md:p-8 mb-4 backdrop-blur-xl shadow-[0_20px_45px_-28px_rgba(0,0,0,0.9)]">
                        <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/20 blur-3xl" />
                        <p className="mb-4 inline-flex rounded-full border border-emerald-100/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-emerald-100/90">
                            Core Offer
                        </p>
                        <h1 id="services-heading" className="text-4xl md:text-5xl font-semibold text-emerald-100 mb-4 text-center">Online Coaching</h1>
                        <div className="text-emerald-50/90 text-lg text-center space-y-4">
                            <p>
                                Personalised training and nutrition built around your life—no gym schedules to juggle. After a quick video consultation, I’ll set clear goals and create a phased programme for home or gym, plus simple calorie/macros targets you can actually stick to.
                            </p>
                            <p>
                                You’ll get weekly check-ins, video form reviews, habit coaching, and smart adjustments based on your progress so you always know what to do next. With 30+ years in fitness, multiple bodybuilding competition wins (and an ABPU M4 110 kg bench-press British record), my approach is practical, safe and results-driven—no fads, just consistent progress.
                            </p>
                            <p>
                                Ongoing support between check-ins (WhatsApp/email) keeps you accountable wherever you train. Start with a free consultation to see how online coaching fits your routine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full max-w-5xl mx-auto px-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-200/40 to-transparent" />
            </div>
            <section className="flex-1">
                <div className="w-full max-w-5xl mx-auto px-4">
                    <div className="relative overflow-hidden rounded-3xl border border-cyan-100/20 bg-white/6 p-6 md:p-8 mb-6 backdrop-blur-xl shadow-[0_20px_45px_-28px_rgba(0,0,0,0.9)]">
                        <div className="pointer-events-none absolute -right-12 top-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
                        <p className="mb-4 inline-flex rounded-full border border-cyan-100/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-cyan-100/90">
                            Compare
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-100">
                            So what is the difference between Online Coaching and <br></br> 1-to-1 Personal Training?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="surface-card p-8 flex flex-col items-center bg-emerald-900/45 border-emerald-100/22">
                            <h3 className="text-2xl font-semibold text-emerald-100 mb-3">1-to-1 Personal Training</h3>
                            <ul className="space-y-2 text-emerald-50/90 list-disc list-inside text-left">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>
                                    Train together in the gym with hands-on guidance
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>
                                    Immediate form correction & real-time motivation
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>
                                    Spotting for heavy lifts & safety support
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>
                                    Great if you want direct, in-person accountability
                                </li>
                            </ul>
                        </div>
                        <div className="surface-card p-8 flex flex-col items-center bg-cyan-900/35 border-cyan-100/22">
                            <h3 className="text-2xl font-semibold text-emerald-100 mb-3">Online Coaching</h3>
                            <ul className="space-y-2 text-emerald-50/90 list-disc list-inside text-left">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                                    Personalised training & nutrition plan delivered online
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                                    Weekly check-ins and progress tracking
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                                    Train anywhere — gym, home, or while travelling
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                                    Expert guidance with maximum flexibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full max-w-5xl mx-auto px-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />
            </div>
            <section className="flex flex-col items-center justify-center gap-8 w-full px-4 max-w-5xl mx-auto">
                <div className="w-full">
                    <div className="relative overflow-hidden rounded-3xl border border-teal-100/20 bg-white/6 p-6 md:p-8 mb-4 backdrop-blur-xl shadow-[0_20px_45px_-28px_rgba(0,0,0,0.9)]">
                        <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-teal-300/18 blur-3xl" />
                        <p className="mb-4 inline-flex rounded-full border border-teal-100/20 bg-white/10 px-3 py-1 text-xs tracking-[0.18em] uppercase text-teal-100/90">
                            Why It Works
                        </p>
                        <h3 id="benefits-heading" className="text-2xl md:text-3xl font-semibold text-emerald-100 mb-4 text-center">Benefits of Online Coaching</h3>
                        <div className="text-emerald-50/90 text-lg text-center space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-2 text-emerald-50/90 list-disc list-inside text-left">
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>Train on your schedule — no fixed session times</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>More affordable than in-person PT</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>Flexible for travel, shifts, or training at home</li>
                                </ul>
                                <ul className="space-y-2 text-emerald-50/90 list-disc list-inside text-left">
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>Ongoing support via regular check-ins</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>Access expert coaching from anywhere</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"></span>Clear structure with progress tracking & updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-8 pb-12 flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="/about"
                        className="btn-secondary inline-block text-lg"
                    >
                        Learn more about me
                    </Link>
                    <Link
                        href="/contact"
                        className="btn-primary inline-block text-lg"
                    >
                        Book Your Free Consultation
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
