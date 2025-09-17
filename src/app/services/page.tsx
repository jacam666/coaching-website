import Link from "next/link";

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16"
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">
          Online Coaching vs 1-to-1 Personal Training
        </h2>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* In-Person PT */}
          <div className="rounded-xl border border-blue-700 bg-gray-900/80 p-6 shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">1-to-1 Personal Training</h3>
            <ul className="space-y-2 text-gray-200 list-disc list-inside">
              <li>Train together in the gym with hands-on guidance</li>
              <li>Immediate form correction & real-time motivation</li>
              <li>Spotting for heavy lifts & safety support</li>
              <li>Great if you want direct, in-person accountability</li>
            </ul>
          </div>

          {/* Online Coaching */}
          <div className="rounded-xl border border-blue-700 bg-gray-900/80 p-6 shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Online Coaching</h3>
            <ul className="space-y-2 text-gray-200 list-disc list-inside">
              <li>Personalised training & nutrition plan delivered online</li>
              <li>Weekly check-ins and progress tracking</li>
              <li>Train anywhere — gym, home, or while travelling</li>
              <li>Expert guidance with maximum flexibility</li>
            </ul>
          </div>
        </div>

        {/* Benefits of Online Coaching */}
        <div
          aria-labelledby="benefits-heading"
          className="rounded-xl border border-gray-700 bg-gray-800 p-8 shadow"
        >
          <h3 id="benefits-heading" className="text-2xl font-semibold text-blue-400 mb-4">
            Benefits of Online Coaching
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              Train on your schedule — no fixed session times
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              More affordable than in-person PT
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              Flexible for travel, shifts, or training at home
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              Ongoing support via regular check-ins
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              Access expert coaching from anywhere
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
              Clear structure with progress tracking & updates
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded-full font-semibold border-2 border-blue-700 hover:border-blue-400 bg-blue-700 text-white hover:bg-blue-900 transition"
            >
              Learn more about me
            </Link>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full font-semibold border-2 border-blue-700 text-white hover:border-blue-400 hover:bg-gray-900 transition"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
