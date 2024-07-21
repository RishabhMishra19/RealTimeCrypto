import Image from "next/image";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
  heading?: string;
  topRightNode?: React.ReactNode;
};

export const PageWrapper = ({
  children,
  heading = "Imagine Crypto Real Time",
  topRightNode,
}: PageWrapperProps) => {
  return (
    <div className="relative h-screen overflow-hidden p-10 flex items-center justify-center">
      <div className="absolute top-0 left-0 z-[-1] w-full h-full max-w-[330px] max-h-[210px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
      <Image
        className="absolute w-full z-[-1] object-cover opacity-20 drop-shadow-lg"
        src="/bitcoin.svg"
        alt="Bitcoin Logo"
        layout="fill"
        priority
        style={{
          filter:
            "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
        }}
      />
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-between w-full">
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white text-center m-3">
            {heading}
          </div>
          {topRightNode}
        </div>
        {children}
      </div>
    </div>
  );
};
