import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-amber-400 py-4 sticky top-0 z-50 shadow-sm">
      <ul className="flex items-center justify-center gap-8">
        <li>
          <Link
            href="/"
            className="text-white font-medium tracking-widest text-sm hover:text-amber-100 transition-colors"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className="text-white font-medium tracking-widest text-sm hover:text-amber-100 transition-colors"
          >
            MENU
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white font-medium tracking-widest text-sm hover:text-amber-100 transition-colors"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
