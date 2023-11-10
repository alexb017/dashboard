import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1>Hello world!</h1>
      <Link href="/dashboard">to Dashboard</Link>
    </main>
  );
}
