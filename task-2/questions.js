// Load the secret token from the .env file
import 'dotenv/config';

//  fetches 10 questions from the API
export async function fetchQuestions(topic) {

  // Send a request 
  const response = await fetch(
    "https://models.inference.ai.azure.com/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Generate exactly 10 multiple choice quiz questions about "${topic}".
Return ONLY a raw JSON array, no markdown, no backticks:
[
  {
    "question": "Question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 1
  }
]
"correct" is 1-4 indicating the correct option. Make wrong answers plausible.`,
          },
        ],
      }),
    },
  );

  
  const data = await response.json();

  // Extract just the text from the response
  const text = data.choices[0].message.content;

  
  return JSON.parse(text.replace(/```json|```/g, "").trim());

} 