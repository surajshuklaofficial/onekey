import Image from "next/image";
import ROBOHAND from "@/public/assets/robo-hand.png";
import HERO from "@/public/assets/Designer (7).png";

export default function Hero() {
  return (
    <main className="flex flex-col lg:flex-row lg:gap-12 justify-center items-center p-8 gap-16 pt-40">
      <section className="flex-1 lg:space-y-2">
        <h2 className="text-4xl lg:text-7xl font-[Roboto] font-bold text-gray-700 text-center lg:text-left">
          One Login, Many Services
        </h2>
        <p className="text-lg lg:text-2xl font-[Roboto] text-gray-500 text-center lg:text-left">
          Simplify Authentication with Us
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-4 lg:mt-0">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 lg:mr-4">
            For Organization Admin
          </button>
          <button className="border-2 border-blue-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-800 text-blue-700 hover:text-blue-800">
            For Service Provider
          </button>
        </div>
      </section>
      <section className="flex-1 flex-end">
        <Image
          src={HERO}
          alt="hero"
          width="500"
          height="500"
          className="rounded-3xl"
        />
      </section>
    </main>
  );
}
