import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cosden Solutions",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <Link href="/form">Form</Link>
    </main>
  );
}
