export default function Footer() {
    return (
        <footer className="py-8">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">
                <div className="surface-card px-6 py-5">
                    <p className="text-green-900 font-medium">&copy; {new Date().getFullYear()} JC Coaching. All rights reserved.</p>
                </div>
                {/* <p className="mt-2">
                    <a href="/privacy" className="hover:text-white">Privacy Policy</a> | <a href="/terms" className="hover:text-white">Terms of Service</a>
                </p> */}
            </div>
        </footer>
    );
}