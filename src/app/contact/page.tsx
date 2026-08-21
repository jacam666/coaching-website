"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function ContactPage() {
    return (
        <main className="app-shell text-emerald-50/90">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-12">
                <div className="w-full max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-emerald-100">Let’s Connect!</h2>
                    <p className="text-lg text-center text-emerald-50/90 mb-8 max-w-2xl mx-auto">Ready to start your fitness journey or have a question? I’d love to hear from you.</p>

                    <form className="surface-card p-8 max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); e.currentTarget.reset(); }}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-emerald-100 font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full p-3 border border-emerald-100/25 rounded-lg bg-emerald-950/65 text-emerald-50 placeholder:text-emerald-100/55 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-emerald-100 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-3 border border-emerald-100/25 rounded-lg bg-emerald-950/65 text-emerald-50 placeholder:text-emerald-100/55 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-emerald-100 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} required className="w-full p-3 border border-emerald-100/25 rounded-lg bg-emerald-950/65 text-emerald-50 placeholder:text-emerald-100/55 focus:outline-none focus:ring-2 focus:ring-emerald-300"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary text-lg">
                            Send Message
                        </button>
                    </form>
                    <div className="mt-10 max-w-lg mx-auto surface-card p-6">
                        <h3 className="text-xl font-bold text-emerald-100 mb-2 text-center">What Happens Next?</h3>
                        <ul className="text-emerald-50/90 text-left list-disc list-inside space-y-2">
                            <li>You’ll get a reply within 24 hours (usually much faster!)</li>
                            <li>I’ll answer your questions or help you get started with coaching</li>
                            <li>We’ll discuss your goals and the best plan for you</li>
                            <li>No pressure—just friendly advice and support!</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}