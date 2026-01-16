"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-green-900">
            <div className="px-4">
                <Navbar />
            </div>
            <section className="flex-1 py-10">
                <div className="w-full max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center mb-2 text-green-600">Let’s Connect!</h2>
                    <p className="text-lg text-center text-green-900 mb-6">Ready to start your fitness journey or have a question? I’d love to hear from you.</p>

                    <form className="bg-white rounded-xl border border-green-700 p-8 shadow max-w-lg mx-auto" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); e.currentTarget.reset(); }}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-green-800 font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-700 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-700" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-green-800 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-700 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-700" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-green-800 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} required className="w-full p-2 border border-green-700 rounded-md bg-white text-green-900 focus:outline-none focus:ring-2 focus:ring-green-700"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-white text-green-900 px-4 py-2 rounded-full text-lg font-semibold shadow hover:bg-green-700 transition border-2 border-green-700 hover:border-green-400">
                            Send Message
                        </button>
                    </form>
                    <div className="mt-10 max-w-lg mx-auto bg-white rounded-xl border border-green-700 p-6 shadow">
                        <h3 className="text-xl font-bold text-green-600 mb-2 text-center">What Happens Next?</h3>
                        <ul className="text-green-900 text-left list-disc list-inside space-y-2">
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