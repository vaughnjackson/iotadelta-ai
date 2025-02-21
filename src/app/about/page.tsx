import React from 'react';
import { sanityClient } from '@/lib/sanityClient';

const defaultContent = {
  bio: "[Your Name]: AI geek, life hacker, small-change believer.",
  mission: "Small changes, AI-powered, human-made."
};

export default async function About() {
  try {
    const about = await sanityClient.fetch(`*[_type == "about"][0]`);
    
    // Use fetched content or fallback to defaults
    const content = about || defaultContent;

    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About</h1>
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold mb-2">Bio</h2>
              <p className="text-gray-300">{content.bio}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-300 italic">{content.mission}</p>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error fetching about data:', error);
    return (
      <main className="min-h-screen bg-gray-900 text-white p-8 pt-16">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About</h1>
          <div className="space-y-6 bg-gray-800 p-6 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold mb-2">Bio</h2>
              <p className="text-gray-300">{defaultContent.bio}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Mission</h2>
              <p className="text-gray-300 italic">{defaultContent.mission}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
} 