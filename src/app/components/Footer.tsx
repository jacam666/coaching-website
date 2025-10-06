export default function Footer() {
    return (
        <footer className=" text-gray-900 py-6 mt-10 ">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} JC Coaching. All rights reserved.</p>
                {/* <p className="mt-2">
                    <a href="/privacy" className="hover:text-white">Privacy Policy</a> | <a href="/terms" className="hover:text-white">Terms of Service</a>
                </p> */}
            </div>
        </footer>
    );
}