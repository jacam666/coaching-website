"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
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
      setSent(true);
      form.reset();
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setSent(false);
      }, 2000);
    } else {
      console.log("Error", data);
    }
  };


  return (
    <main className="app-shell items-center justify-center px-4 overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <section className="relative z-10 py-10 px-4 md:px-10 flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto mt-4 rounded-3xl border border-emerald-200/20 bg-white/8 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-8 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full animate-[fadeIn_500ms_ease-out]">
          {/* Mobile: logo/text above image; Desktop: image first */}
          <div className="flex flex-col md:hidden items-center w-full">
            <Image
              src="/images/coaching-image-1.jpg"
              width={80}
              height={80}
              alt="Coach portrait"
              className="w-44 h-44 rounded-full object-cover border-4 border-emerald-200/70 shadow-xl"
            />
          </div>
          <div className="hidden md:flex flex-row items-center gap-6 md:gap-12 w-full justify-center">
            <Image
              src="/images/coaching-image-1.jpg"
              width={80}
              height={80}
              alt="Coach portrait"
              className="w-44 h-44 rounded-full object-cover border-4 border-emerald-200/70 shadow-xl"
            />
            <div className="flex items-center gap-6">
              <Image src="/jc-logo-green.svg" alt="JC Logo" width={80} height={80} className="w-20 h-20" />
              <span className="text-5xl font-bold text-emerald-100">Coaching</span>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl text-center text-emerald-50 leading-tight max-w-4xl">
          Build a stronger body with coaching that fits real life.
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100/90 mb-2 -mt-1 text-center max-w-3xl">
          1-to-1 Online Coaching for Personal Training & Diet Plans
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="btn-primary inline-block text-lg"
          >
            Book Your Free Consultation
          </Link>

          <Link
            href="/about"
            className="btn-secondary inline-block text-lg"
          >
            Learn more about me
          </Link>
        </div>

      </section>
      {/* Services Section */}
      <section className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 rounded-xl gap-8 my-8 md:my-10">
        <div className="rounded-2xl border border-emerald-200/15 bg-emerald-950/45 p-8 flex flex-col items-center backdrop-blur-sm">
          <Image src="/file.svg" alt="Personal Training" width={64} height={64} className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-emerald-100 mb-2">Online Coaching</h2>
          <p className="text-emerald-50/90 text-center text-lg">
            Customized workout plans, progress tracking, and expert guidance to help you reach your fitness goals from anywhere.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-200/15 bg-emerald-950/45 p-8 flex flex-col items-center backdrop-blur-sm">
          <Image src="/window.svg" alt="Diet Plans" width={64} height={64} className="w-16 h-16 mb-4" />
          <h2 className="text-3xl font-bold text-emerald-100 mb-2">Diet Plans</h2>
          <p className="text-emerald-50/90 text-center text-lg">
            Personalized nutrition strategies tailored to your lifestyle, preferences, and goals for sustainable results.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 max-w-2xl text-center py-8 px-6 rounded-2xl md:my-0 border border-emerald-200/15 bg-emerald-950/45 backdrop-blur-sm">
        <h3 className="text-3xl font-semibold text-emerald-100 mb-2">Why Choose Us?</h3>
        <p className="text-emerald-50/90 text-lg">
          With years of experience in fitness and nutrition coaching, I provide dedicated support and proven strategies to help you transform your health and confidence. Start your journey today!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 w-full max-w-xl rounded-xl my-8 md:my-0 py-12">
        <h3 className="text-3xl font-bold text-emerald-100 mb-4 text-center">Get in Touch</h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl border border-emerald-200/20 bg-white/8 p-8 backdrop-blur-xl">
          <input type="text" name="name" placeholder="Your Name" className="border border-emerald-100/30 bg-emerald-950/60 text-emerald-50 placeholder:text-emerald-100/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" required />
          <input type="email" name="email" placeholder="Your Email" className="border border-emerald-100/30 bg-emerald-950/60 text-emerald-50 placeholder:text-emerald-100/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" required />
          <textarea name="message" placeholder="How can I help you?" className="border border-emerald-100/30 bg-emerald-950/60 text-emerald-50 placeholder:text-emerald-100/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" rows={4} required />
          <button
            type="submit"
            className={`px-6 py-3 rounded-full font-semibold transition text-lg ${sent ? "bg-green-700 text-white" : "btn-primary"}`}
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
