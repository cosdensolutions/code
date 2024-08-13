import FetchExample1 from "@/components/FetchExample1";
import FetchExample2 from "@/components/FetchExample2";
import FetchExample3 from "@/components/FetchExample3";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cosden Solutions",
};

export default function Home() {
  return (
    <main>
      {/* <FetchExample1 /> */}
      {/* <FetchExample2 /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <FetchExample3 />
      </Suspense>
    </main>
  );
}
