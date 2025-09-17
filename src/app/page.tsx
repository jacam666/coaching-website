import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center justify-center gap-8 w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full">
          {/* Mobile: logo/text above image; Desktop: image first */}
          <div className="flex flex-col md:hidden items-center w-full">
            <div className="flex items-center gap-4 mb-2">
              <img src="/jc-logo.svg" alt="JC Logo" className="w-14 h-14" />
              <span className="text-3xl font-bold text-white">Coaching</span>
            </div>
            <img
              src="/images/coaching-image-1.jpg"
              alt="Coach portrait"
              className="w-44 h-44 rounded-full object-cover border-4 border-blue-700 shadow-lg"
            />
          </div>
          <div className="hidden md:flex flex-row items-center gap-6 md:gap-12 w-full justify-center">
            <img
              src="/images/coaching-image-1.jpg"
              alt="Coach portrait"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-700 shadow-lg"
            />
            <div className="flex items-center gap-6">
              <img src="/jc-logo.svg" alt="JC Logo" className="w-20 h-20" />
              <span className="text-5xl font-bold text-white">Coaching</span>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 mt-2 text-center">
          1-to-1 Online Coaching for Personal Training & Diet Plans
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-900 transition border-2 border-blue-700 hover:border-blue-400"
        >
          Book Your Free Consultation
        </a>
      </section>

      <section>
        <Link
          href="/about"
          className="inline-block bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow transition duration-300 hover:bg-gradient-to-tl hover:from-gray-800 hover:via-gray-900 hover:to-black border-2 border-blue-700 hover:border-blue-400"
        >
          Learn more about me
        </Link>
      </section>
      {/* Services Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center border border-gray-700">
          <img src="/file.svg" alt="Personal Training" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Personal Training</h2>
          <p className="text-gray-300 text-center">
            Customized workout plans, progress tracking, and expert guidance to help you reach your fitness goals from anywhere.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center border border-gray-700">
          <img src="/window.svg" alt="Diet Plans" className="w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Diet Plans</h2>
          <p className="text-gray-300 text-center">
            Personalized nutrition strategies tailored to your lifestyle, preferences, and goals for sustainable results.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-2xl text-center py-8">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Why Choose Us?</h3>
        <p className="text-gray-300">
          With years of experience in fitness and nutrition coaching, I provide dedicated support and proven strategies to help you transform your health and confidence. Start your journey today!
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-xl py-12">
        <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">Get in Touch</h3>
        <form className="flex flex-col gap-4 bg-gray-800 rounded-xl shadow p-8 border border-gray-700">
          <input type="text" placeholder="Your Name" className="border border-gray-600 bg-gray-900 text-white rounded px-4 py-2" required />
          <input type="email" placeholder="Your Email" className="border border-gray-600 bg-gray-900 text-white rounded px-4 py-2" required />
          <textarea placeholder="How can I help you?" className="border border-gray-600 bg-gray-900 text-white rounded px-4 py-2" rows={4} required />
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
