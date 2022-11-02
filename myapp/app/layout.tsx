/* eslint-disable @next/next/no-head-element */

import Link from "next/link";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </nav>
        {children}
        </main>
        </body>
    </html>
  );
}
