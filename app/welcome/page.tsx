import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <PageWrapper heading="Welcome to My Project!">
      <div className="text-left p-8 shadow-lg rounded-lg max-w-[740px]">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Thank you for taking the time to review this project. This is a
          demonstration of my skills in full-stack development, showcasing my
          ability to build responsive, interactive, and dynamic web
          applications.
        </p>
        <div className="p-8 max-w-3xl mx-auto">
          <p className="text-lg mb-6 w-full">Key features include:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Interactive User Interface</li>
            <li>Real-time Data Processing</li>
            <li>Seamless Integration with APIs</li>
          </ul>
        </div>
        <div className="">
          <p className="text-sm mb-2 text-grap-500">
            Please click the button below to proceed.
          </p>
          <Link href="/project">
            <span className="inline-block px-6 py-1 mb-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 ">
              Watch Real Time Crypto
            </span>
          </Link>
        </div>

        <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
          For any questions or feedback, feel free to reach out at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-500 hover:underline"
          >
            rishabhpndt19@gmail.com
          </a>
        </p>
        <p className="text-md text-gray-500 dark:text-gray-300">
          Developed by <span className="text-blue-600">Rishabh Mishra</span>
        </p>
      </div>
    </PageWrapper>
  );
};

export default WelcomePage;
