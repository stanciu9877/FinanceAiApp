import { useMutation } from "@tanstack/react-query";

const API_URL = "http://localhost:3000";

const askAdvisor = async (question: string): Promise<string> => {
  const response = await fetch(`${API_URL}/advisor/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) throw new Error("Failed to fetch answer");

  const data = await response.json();
  return data.answer;
};

export const useAskAdvisor = () => {
  return useMutation({
    mutationFn: askAdvisor,
  });
};
