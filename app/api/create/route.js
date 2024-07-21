import { addGenerationHistory, getRateLimit, setRateLimit } from "@lib/Kv";


export const POST = async (req) => {
  try {
    const { userId, prompt } = await req.json();

    // Implement rate limiting
    const { count, timestamp } = await getRateLimit(userId);
    const oneHour = 3600000;
    const now = Date.now();

    if (now - timestamp < oneHour && count >= 3) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
        { status: 429 }
      );
    }

    if (now - timestamp > oneHour) {
      await setRateLimit(userId, { count: 1, timestamp: now });
    } else {
      await setRateLimit(userId, { count: count + 1, timestamp });
    }

    const image = "https://assets.playgroundai.com/87d75239-2fe6-4dca-848e-67a7a79fe56c.jpg"
    // const image = `https://source.unsplash.com/random?sig=${Math.random()}`;

    await addGenerationHistory(userId, image, prompt);

    return new Response(JSON.stringify({ image, userId, prompt }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
};
