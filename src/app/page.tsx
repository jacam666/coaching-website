"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setResult("Sending....");
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "2dcede50-807f-4105-b537-2481a15ebeec");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    setIsSending(false);
    if (data.success) {
      setResult("Message sent successfully!");
      setSent(true);
      form.reset();
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setSent(false);
        setResult("");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-100 px-4">
      <Navbar />
      {/* Hero Section */}
      <section className="py-10 flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto shadow-md md:shadow-none bg-green-100 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
          {/* Mobile: logo/text above image; Desktop: image first */}
          <div className="flex flex-col md:hidden items-center w-full">
            <Image
              src="/images/coaching-image-1.jpg"
              width={80}
              height={80}
              alt="Coach portrait"
              className="w-44 h-44 rounded-full object-cover border-4 border-green-100 shadow-lg"
            />
          </div>
          <div className="hidden md:flex flex-row items-center gap-6 md:gap-12 w-full justify-center">
            <Image
              src="/images/coaching-image-1.jpg"
              width={80}
              height={80}
              alt="Coach portrait"
              className="w-44 h-44 rounded-full object-cover border-4 border-green-100 shadow-lg"
            />
            <div className="flex items-center gap-6">
              <img src="/jc-logo-green.svg" alt="JC Logo" className="w-20 h-20" />
              <span className="text-5xl font-bold text-green-900">Coaching</span>
            </div>
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-gray-800 mb-8 mt-2 text-center">
          1-to-1 Online Coaching for Personal Training & Diet Plans
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="inline-block bg-green-100 text-green-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-300 transition border-2 border-green-300 hover:border-green-500"
          >
            Book Your Free Consultation
          </Link>

          <Link
            href="/about"
            className="inline-block bg-gradient-to-br from-green-100 via-green-50 to-green-200 text-green-900 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 hover:bg-green-300 border-2 border-green-300 hover:border-green-500"
          >
            Learn more about me
          </Link>
        </div>

      </section>
      {/* Services Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 shadow-md md:shadow-none rounded-xl gap-8 py-12 my-8 md:my-0 ">
        <div className="bg-green-100 rounded-xl p-8 flex flex-col items-center">
          <img src="/file.svg" alt="Personal Training" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-green-700 mb-2">Online Coaching</h2>
          <p className="text-green-900 text-center text-lg">
            Customized workout plans, progress tracking, and expert guidance to help you reach your fitness goals from anywhere.
          </p>
        </div>
        <div className="bg-green-100 rounded-xl p-8 flex flex-col items-center">
          <img src="/window.svg" alt="Diet Plans" className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-green-700 mb-2">Diet Plans</h2>
          <p className="text-green-900 text-center text-lg">
            Personalized nutrition strategies tailored to your lifestyle, preferences, and goals for sustainable results.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-2xl text-center py-8 bg-green-100 shadow-md md:shadow-none rounded-xl my-8 md:my-0">
        <h3 className="text-3xl font-semibold text-green-700 mb-2">Why Choose Us?</h3>
        <p className="text-green-900 text-lg">
          With years of experience in fitness and nutrition coaching, I provide dedicated support and proven strategies to help you transform your health and confidence. Start your journey today!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-xl shadow-md md:shadow-none rounded-xl my-8 md:my-0  py-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4 text-center">Get in Touch</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-green-100 rounded-xl p-8">
          <input type="text" name="name" placeholder="Your Name" className="border border-green-300 bg-white text-green-900 rounded px-4 py-2" required />
          <input type="email" name="email" placeholder="Your Email" className="border border-green-300 bg-white text-green-900 rounded px-4 py-2" required />
          <textarea name="message" placeholder="How can I help you?" className="border border-green-300 bg-white text-green-900 rounded px-4 py-2" rows={4} required />
          <button
            type="submit"
            className={`px-6 py-2 rounded-full font-semibold transition text-lg ${sent ? "bg-green-600 text-white" : "bg-green-100 text-green-900 hover:bg-green-300 border-2 border-green-300 hover:border-green-500"}`}
            disabled={isSending || sent}
          >
            {isSending ? "Sending..." : sent ? "Message sent" : "Send Message"}
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
