import Image from "next/image";

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Achieve Your Best Self</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          1-to-1 Online Coaching for Personal Training & Diet Plans
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-900 transition"
        >
          Book Your Free Consultation
        </a>
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
    </main>
  );
}
