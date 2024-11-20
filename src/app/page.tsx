"use client";
import { RootState } from "@reduxjs/toolkit/query";
import Image from "next/image";
import { useSelector } from "react-redux";
import Comp2 from "./counter/page";

export default function Home() {
  const counterValue = useSelector((state: RootState) => state.counter.value);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter Value: {counterValue}</h1>
      <Comp2 /> {/* Render the buttons here */}
    </div>
  );
}
