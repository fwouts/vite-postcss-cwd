import { atom, useAtom } from "jotai";
import React from "react";

const countAtom = atom(0);

function App() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div
            className="max-w-md mx-auto py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            onClick={() => setCount((c) => c + 1)}
          >
            Counter: {count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
