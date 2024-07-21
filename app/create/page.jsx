"use client";

import { getRateLimit } from "@lib/Kv";
import { Button } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session, status } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [rateLimit, setRateLimit] = useState({
    count: 0,
    timestamp: Date.now(),
  });

  const handleCreate = async (e) => {
    e.preventDefault();

    // try {
    //   const res = await axios.post("api/create", {
    //     prompt: prompt,
    //     userId: session?.user.id,
    //   });
    //   setImageUrl(res.data.image);
    // } catch (error) {
    //   console.error("Error generating image:", error);
    // }
  };

  useEffect(() => {
    if (status === "authenticated") {
      async function fetchRateLimit() {
        const rateLimit = await getRateLimit(session.user.id);
        setRateLimit(rateLimit);
      }
      fetchRateLimit();
    }
  }, [session, status]);

  const timeRemaining = () => {
    const oneHour = 3600000;
    const now = Date.now();
    const timeLeft = oneHour - (now - rateLimit.timestamp);
    return timeLeft > 0
      ? `${Math.floor(timeLeft / 60000)} minutes`
      : "0 minutes";
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>You need to sign in first.</div>;
  }

  return (
    <div>
      <div className=" max-w-4xl mx-auto">
        <div className="flex  items-center justify-between rounded-lg  shadow shadow-gray-100  p-3">
          <Image
            src={session?.user.image}
            width={38}
            height={38}
            alt="image"
            className="rounded-lg"
          />
          <input
            type="text"
            name="prompt"
            value={prompt}
            placeholder="Get creative and playful"
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-transparent p-2 text-wrap flex-1 mx-4 outline-none"
          />
          <Button onClick={handleCreate} variant="contained" className="">
            Create
          </Button>
        </div>

        <div>{imageUrl && <img src={imageUrl} alt="Generated" />}</div>
      </div>

      <div className="p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-2">Rate Limit Status</h2>
        <p>Images generated this hour: {rateLimit.count}/3</p>
        <p>Time until reset: {timeRemaining()}</p>
      </div>
    </div>
  );
};

export default page;
