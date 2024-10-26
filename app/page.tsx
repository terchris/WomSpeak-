import { QuestionList } from "@/components/question-list";
import { QuestionForm } from "@/components/question-form";
import { Brain } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-12 h-12 text-primary" />
          <h1 className="text-4xl font-bold text-center">AI Q&A Platform</h1>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl">
          Ask questions and get AI-powered answers. Vote on the most helpful responses
          and explore what others are asking.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <QuestionForm />
        <QuestionList />
      </div>
    </main>
  );
}