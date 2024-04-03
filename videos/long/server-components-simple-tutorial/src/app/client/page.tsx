"use client";

import { expensiveFunction } from "@/expensiveFunction";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState();

  useEffect(() => {
    expensiveFunction();
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the client</h1>
    </main>
  );
}
