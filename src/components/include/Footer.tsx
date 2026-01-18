import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 md:p-8">
        <div className="flex items-center gap-2 grayscale opacity-70">
          <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">G</span>
          </div>
          <span className="text-slate-800 font-bold text-lg tracking-tight italic">
            GotisMS
          </span>
        </div>

        <p className="text-(--secondary) text-sm">
          © 2026 GotisMS Gateway. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm font-bold text-slate-400">
          <Link href="#" className="hover:text-slate-900">
            Privacy
          </Link>
          <Link href="#" className="hover:text-slate-900">
            Terms
          </Link>
          <Link href="#" className="hover:text-slate-900">
            API Docs
          </Link>
        </div>
      </div>
    </footer>
  );
}
