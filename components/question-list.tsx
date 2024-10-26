"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  question: string;
  answer: string;
  votes: number;
  createdAt: string;
}

export function QuestionList() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/questions");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVote = async (questionId: string) => {
    try {
      await fetch(`/api/vote/${questionId}`, { method: "POST" });
      fetchQuestions(); // Refresh questions after voting
    } catch (error) {
      console.error("Failed to vote:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <Card key={question.id} className="p-6">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleVote(question.id)}
              className="h-auto flex flex-col gap-1"
            >
              <Star
                className={cn(
                  "h-6 w-6",
                  question.votes > 0 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                )}
              />
              <span className="text-sm font-medium">{question.votes}</span>
            </Button>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{question.question}</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{question.answer}</p>
              <div className="mt-4 text-sm text-muted-foreground">
                Asked on {new Date(question.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </Card>
      ))}
      {questions.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No questions yet. Be the first to ask!
        </div>
      )}
    </div>
  );
}