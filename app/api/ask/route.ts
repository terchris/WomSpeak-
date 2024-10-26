import { NextResponse } from "next/server";

// Mock responses for testing
const mockResponses = [
  "Based on current research, this is a fascinating question. The key factors to consider are: First, the underlying principles that govern this phenomenon. Second, the practical applications in real-world scenarios. Third, the potential implications for future developments in this field.",
  "That's an interesting perspective to explore. From what we know, there are multiple aspects to consider: 1) The historical context that shaped our current understanding, 2) The empirical evidence supporting various theories, and 3) The practical implications for modern applications.",
  "This is a complex topic that deserves careful analysis. Consider these points: First, the fundamental principles at play. Second, how these concepts interact in practice. Third, the broader implications for the field. Finally, potential future developments that could change our understanding.",
  "From a technical standpoint, several factors come into play. We need to consider the theoretical framework, practical implementation challenges, and potential optimization strategies. The evidence suggests that a balanced approach yields the best results.",
  "Looking at this from multiple angles, we can identify several key insights: 1) The core mechanisms driving this phenomenon, 2) Real-world applications and their limitations, 3) Future directions for research and development in this area."
];

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Get a random response from the mock responses
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];

    return NextResponse.json({
      id: Date.now().toString(),
      question,
      answer: randomResponse,
      votes: 0,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Failed to process question:", error);
    return NextResponse.json(
      { error: "Failed to process question" },
      { status: 500 }
    );
  }
}