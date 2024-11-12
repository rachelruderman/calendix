"use client";
import Link from "next/link";

export default function RightNav({ email }: { email: string }) {
  const hasLoggedOut = location.href.includes("logged-out");
  if (email && !hasLoggedOut) {
    return (
      <nav className="flex items-center gap-4">
        <Link href="/dashboard" className="btn-blue">
          Dashboard
        </Link>
        <a href="/api/logout">Logout</a>
      </nav>
    );
  }
  return (
    <nav className="flex items-center gap-4">
      <Link href="/api/auth">Sign in</Link>
      <Link href="/about" className="btn-blue">
        Get started
      </Link>
    </nav>
  );
}
