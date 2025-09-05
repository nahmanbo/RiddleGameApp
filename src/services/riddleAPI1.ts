// src/services/riddlesAPI.ts
import { TokenManager } from "./tokenManager"; 
import type { Riddle } from "../types/riddle";

const BASE_URL = "http://localhost:1212"; 

// Fetch all riddles
export const fetchAllRiddles = async (): Promise<Riddle[]> => {
  const res = await fetch(`${BASE_URL}/riddles`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TokenManager.load()}`
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch riddles.");
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
};

// Fetch riddles by difficulty
export const fetchRiddlesByDifficulty = async (difficulty: string): Promise<Riddle[]> => {
  const res = await fetch(`${BASE_URL}/riddles/difficulty/${difficulty}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch riddles.");
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
};

// Create a new riddle
export const createRiddle = async (newRiddle: Riddle) => {
  const res = await fetch(`${BASE_URL}/riddles`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenManager.load()}`
    },
    body: JSON.stringify(newRiddle),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to create riddle.");
  }

  return await res.json();
};

// Update riddle by ID
export const updateRiddle = async (id: number, updatedRiddle: Riddle) => {
  const res = await fetch(`${BASE_URL}/riddles/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenManager.load()}`
    },
    body: JSON.stringify(updatedRiddle),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to update riddle.");
  }

  return await res.json();
};

// Delete riddle by ID
export const deleteRiddle = async (id: number) => {
  const res = await fetch(`${BASE_URL}/riddles/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TokenManager.load()}`
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to delete riddle.");
  }

  return true;
};
