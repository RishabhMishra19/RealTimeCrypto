"use client";
import React, { useState } from "react";
import { PageWrapper } from "../components/PageWrapper";

const ProjectPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <PageWrapper
      topRightNode={
        <select
          id="minimal-select"
          value={selectedOption}
          onChange={handleChange}
          //   className="border border-gray-300 bg-grap-600 rounded-md py-1 h-[40px] w-[300px] px-3 text-gray-700 bg-white shadow-sm "
          className="bg-gray-800 border border-gray-700 rounded-md py-1 h-[40px] w-[300px] px-3 text-white focus:outline-none focus:ring-0 focus:border-transparent"
        >
          <option value="">Choose the Coin</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      }
    >
      {!selectedOption ? (
        <div className="relative z-10 text-center text-white text-lg">
          <div className=" text-yellow-100 p-6 rounded-lg shadow-md mx-4">
            <p className="text-5xl font-semibold mb-2 mt-[100px]">
              <span className="bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Attention!
              </span>
            </p>
            <p className="text-xl text-white">
              Please select one coin from the dropdown in the top right corner.
            </p>
          </div>
        </div>
      ) : (
        <div className="m-6 bg-gray-900 h-[calc(100vh-60px)] bg-opacity-80">
          <div className="relative">
            <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
              <thead className="bg-gray-700 text-gray-200">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-semibold">
                    Name
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">
                    Email
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">
                    Role
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
            </table>

            <div className="overflow-x-auto mt-[-1px]">
              <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                <tbody className="text-gray-300 overflow-y-auto max-h-[calc(100vh-60px-4rem)]">
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-900 border-b border-gray-700 hover:bg-gray-600 even:bg-gray-800">
                    <td className="py-3 px-6 text-sm">John Doe</td>
                    <td className="py-3 px-6 text-sm">john.doe@example.com</td>
                    <td className="py-3 px-6 text-sm">Admin</td>
                    <td className="py-3 px-6 text-sm">
                      <span className="bg-green-600 text-green-100 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default ProjectPage;
