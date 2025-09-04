const BASE_URL = "http://localhost:1212";

// Fetch riddles by difficulty
export const fetchRiddles = async (difficulty: string) => {
  const res = await fetch(`${BASE_URL}/riddles/difficulty/${difficulty}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch riddles.");
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
};
