'use client';
import { useState } from 'react';

export default function TryAI() {
  const [goal, setGoal] = useState('');
  const [nudge, setNudge] = useState('');

  const generateNudge = async () => {
    const res = await fetch('/api/nudge', {
      method: 'POST',
      body: JSON.stringify({ goal }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setNudge(data.nudge);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Try AI</h1>
        <p className="mt-4">What's one thing to improve?</p>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="mt-4 p-2 w-full bg-gray-800 rounded"
          placeholder="e.g., Be kinder"
        />
        <button onClick={generateNudge} className="mt-4 px-4 py-2 bg-blue-500 rounded">Get My Nudge</button>
        {nudge && (
          <div className="mt-6 p-4 bg-gray-800 rounded">
            <p className="italic">{nudge}</p>
            <button className="mt-2 text-blue-500">Share this Nudge</button>
          </div>
        )}
      </section>
    </main>
  );
} 