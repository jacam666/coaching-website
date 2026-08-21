export default function Footer() {
    return (
        <footer className="relative z-10 py-8">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">
                <div className="rounded-2xl border border-emerald-100/20 bg-white/8 px-6 py-5 backdrop-blur-xl">
                    <p className="text-emerald-100 font-medium">&copy; {new Date().getFullYear()} JC Coaching. All rights reserved.</p>
                </div>
                {/* <p className="mt-2">
                    <a href="/privacy" className="hover:text-white">Privacy Policy</a> | <a href="/terms" className="hover:text-white">Terms of Service</a>
                </p> */}
            </div>
        </footer>
    );
}