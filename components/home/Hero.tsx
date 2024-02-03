import Image from "next/image";

import ROBOHAND from "@/public/assets/robo-hand.png";

export default function Hero() {
    return (
        <main className="h-screen p-2 bg-accent">
            <h1 className="text-8xl w-9/12">Manage Customers or Workforce with <br /> Us</h1>
            <Image src={ROBOHAND} alt="robo-hand" width="1200" height="900" className="absolute bottom-0 right-0"></Image>
        </main>
    );
}