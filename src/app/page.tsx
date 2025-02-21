import { sanityClient } from '@/lib/sanityClient';

export default async function Home() {
  const nudge = await sanityClient.fetch(`*[_type == "blog"][0].nudge`);
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Small AI Changes, Giant Life Impact</h1>
        <p className="mt-4 text-lg">AI's not just tech—it's your nudge to a better you.</p>
        <div className="mt-6">
          <a href="/blog" className="mr-4 px-4 py-2 bg-yellow-500 text-black rounded">Read the Blog</a>
          <a href="/try-ai" className="px-4 py-2 bg-blue-500 rounded">Try a Nudge</a>
        </div>
        <div className="mt-8">
          <h2 className="text-xl">Quick Nudge:</h2>
          <p className="mt-2 italic">{nudge || "Loading your first nudge..."}</p>
        </div>
      </section>
    </main>
  );
}
