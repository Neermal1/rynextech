"use client";
import Lottie from "lottie-web";
import Link from "next/link";
import { useEffect, useRef } from "react";
import not_available from "../app/json/nodata.json";
import PrimaryButton from "./components/Button/PrimaryButton";

export default function NotFound() {
  const noData: any = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: noData.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: not_available,
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="h-[50vh] w-[50vh]" ref={noData}></div>
      <Link href="/">
        <PrimaryButton>Go to homepage</PrimaryButton>
      </Link>
    </div>
  );
}
