import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-4">
      <nav>
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          ← Home
        </Link>
      </nav>
    </header>
  );
}
