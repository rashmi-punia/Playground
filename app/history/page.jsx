"use client"

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getGenerationHistory } from "../lib/kv";

const History = () => {
  const { data: session, status } = useSession();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      async function fetchHistory() {
        const history = await getGenerationHistory(session.user.id);
        setHistory(history);
      }
      fetchHistory();
    }
  }, [session, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>You need to sign in first.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generation History</h1>
      <div className="grid grid-cols-3 gap-4">
        {history.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Generated"
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default History;
