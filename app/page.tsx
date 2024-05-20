import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mb-3 text-2xl font-semibold">
        This is a test deployment of a Next.js app on Vercel using GitHub
        Actions.
      </h2>
      <h2 className="mb-3 text-xl font-regular">Feature 1 Test</h2>
      <h2 className="mb-3 text-xl font-regular">Feature 2 Test</h2>
      <p>damitha.dev</p>
    </main>
  );
}
