"use client"

import { createClient } from "@vercel/kv";



// console.log("Loading environment variables for Redis config:");
// console.log("KV_REST_API_URL:", process.env.NEXT_PUBLIC_KV_REST_API_URL);
// console.log("KV_REST_API_TOKEN:", process.env.NEXT_PUBLIC_KV_REST_API_TOKEN);

const kv = createClient({
  url: process.env.NEXT_PUBLIC_KV_REST_API_URL,
  token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN,
});


export async function getGenerationHistory(userId) {
  const history = await kv.get(`history:${userId}`);
  return history ? JSON.parse(history) : [];
}

export async function addGenerationHistory(userId, image,prompt) {
  const history = await getGenerationHistory(userId);
  history.push({image,prompt});
  await kv.set(`history:${userId}`, JSON.stringify(history));
}

export async function getRateLimit(userId) {
  const rateLimit = await kv.get(`rateLimit:${userId}`);
  return rateLimit
    ? JSON.parse(rateLimit)
    : { count: 0, timestamp: Date.now() };
}

export async function setRateLimit(userId, rateLimit) {
  await kv.set(`rateLimit:${userId}`, JSON.stringify(rateLimit));
}

export async function getExploreImages() {
  const images = await kv.get("explore");
  return images ? JSON.parse(images) : [];
}

export async function addExploreImage(image) {
  const images = await getExploreImages();
  images.push(image);
  await kv.set("explore", JSON.stringify(images));
}
