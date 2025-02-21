import { sanityClient } from '@/lib/sanityClient';

export default async function About() {
  const about = await sanityClient.fetch(`*[_type == "about"][0]{bio, mission}`);
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-4">{about.bio || "[Your Name]: AI geek, life hacker, small-change believer."}</p>
        <p className="mt-4 italic">{about.mission || "Small changes, AI-powered, human-made."}</p>
      </section>
    </main>
  );
} 