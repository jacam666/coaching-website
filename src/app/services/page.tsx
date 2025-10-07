
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
    return (
        <main className="flex flex-col min-h-screen bg-green-100 text-white">
            <div className="px-4">
                <Navbar />
            </div>
            {/* section for Online Coaching description */}
            <section className="py-10 flex flex-col items-center justify-center gap-8 w-full px-4 max-w-5xl mx-auto">
                <div className="w-full">
                    <div className="bg-green-100 rounded-xl p-6 shadow-lg md:shadow-none mb-4">
                        <h1 id="services-heading" className="text-3xl font-semibold text-green-600 mb-3 text-center">Online Coaching</h1>
                        <div className="text-green-900 text-lg text-center space-y-4">
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
            <h2 className="text-3xl py-10 md:text-4xl font-bold text-center w-3/4 mx-auto text-green-600">
                So what is the difference between Online Coaching and <br></br> 1-to-1 Personal Training?
            </h2>
            <section className="flex-1">
                <div className="w-full max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="rounded-xl bg-green-100 p-8 shadow-lg  md:shadow-none flex flex-col items-center">
                            <h3 className="text-2xl font-semibold text-green-600 mb-3">1-to-1 Personal Training</h3>
                            <ul className="space-y-2 text-green-900 list-disc list-inside text-left">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Train together in the gym with hands-on guidance
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Immediate form correction & real-time motivation
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Spotting for heavy lifts & safety support
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Great if you want direct, in-person accountability
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-xl bg-green-100 p-8 shadow-lg  md:shadow-none flex flex-col items-center">
                            <h3 className="text-2xl font-semibold text-green-600 mb-3">Online Coaching</h3>
                            <ul className="space-y-2 text-green-900 list-disc list-inside text-left">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Personalised training & nutrition plan delivered online
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Weekly check-ins and progress tracking
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Train anywhere — gym, home, or while travelling
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                                    Expert guidance with maximum flexibility
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-8 w-full px-4 max-w-5xl mx-auto">
                <div className="w-full">
                    <div className="bg-green-100 rounded-xl p-6 shadow-lg md:shadow-none mb-4">
                        <h3 id="benefits-heading" className="text-2xl font-semibold text-green-600 mb-3 text-center">Benefits of Online Coaching</h3>
                        <div className="text-green-900 text-lg text-center space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-2 text-green-900 list-disc list-inside text-left">
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>Train on your schedule — no fixed session times</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>More affordable than in-person PT</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>Flexible for travel, shifts, or training at home</li>
                                </ul>
                                <ul className="space-y-2 text-green-900 list-disc list-inside text-left">
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>Ongoing support via regular check-ins</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>Access expert coaching from anywhere</li>
                                    <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-green-600"></span>Clear structure with progress tracking & updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="/about"
                        className="inline-block bg-gradient-to-br from-green-100 via-green-50 to-green-200 text-green-900 px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-green-300 border-2 border-green-300 hover:border-green-500"
                    >
                        Learn more about me
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-block bg-green-100 text-green-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-300 transition border-2 border-green-300 hover:border-green-500"
                    >
                        Book Your Free Consultation
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
