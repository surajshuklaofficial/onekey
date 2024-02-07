import Image from "next/image";

import ROBOHAND from "@/public/assets/robo-hand.png";

export default function Hero() {
  return (
    <main className="h-screen bg-accent">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container h-5/6 mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Manage Customers or Workforce with <br /> 
            <span className="dark:text-violet-400">Us</span>
            
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
          <div className="flex flex-wrap justify-center">
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
