import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { goal } = await req.json();
  // Placeholder: Replace with real AI API (e.g., OpenAI) later
  const nudge = `Try this: ${goal} today—small step, big win.`; // Dummy response
  return NextResponse.json({ nudge });
} 