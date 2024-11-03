"use client";

import { Link, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setShowLine(true);
  }, []);

  return (
    <section className="text-center mt-24">
      <h1 className="text-5xl font-bold mb-6 leading-snug">
        Scheduling{" "}
        <span className="text-blue-600 cool-underline">made simple</span>
        <br />
        for people like you
      </h1>
      <p className="text-gray-600">
        Most scheduling apps are simple but ours is even more simple. <br /> On
        top of this, it's open source and you can see the code
      </p>
      <div className="mt-4 flex gap-4 justify-center">
        <Link className="bg-black text-white py-2 px-4 rounded-full" href="/">
          Get started for free
        </Link>
        <Link
          href="/"
          className="border rounded-full py-2 px-4 inline-flex gap-2 items-center text-gray-800  border-gray-300"
        >
          <Play size={16} />
          Watch video
        </Link>
      </div>
    </section>
  );
}