import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1E33]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/gotisms-logo.png" // no need for {}
          alt="Gotisms Logo" // always add alt for accessibility
          width={150}
          height={80}
          priority={true} // optional: if you want it to load faster
        />

        {/* <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight italic">
              Gotis<span className="text-cyan-400">MS</span>
            </span>
          </div> */}

        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {["Features", "Use Cases", "Pricing", "Support"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-white text-sm font-medium hover:text-cyan-400 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
