import Image from "next/image";
import Homepage from "./components/Homepage";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Homepage />
    </main>
  );
}
