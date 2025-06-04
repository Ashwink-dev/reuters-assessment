import React from "react";

import MainApp from "./components/mainapp";


export default function Home() {
 

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       <MainApp />
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        reuters assessment &copy; 2025
      </footer>
    </div>
  );
}
