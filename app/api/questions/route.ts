import { NextResponse } from "next/server";

// In a real application, this would be stored in a database
let questions: any[] = [];

export async function GET() {
  // Return questions sorted by votes (highest first)
  return NextResponse.json(
    questions.sort((a, b) => b.votes - a.votes)
  );
}

// This is just for demo purposes
// In a real application, you would use a proper database
export function addQuestion(question: any) {
  questions.push(question);
}