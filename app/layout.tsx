import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </main>
        {children}
      </body>
    </html>
  );
}
