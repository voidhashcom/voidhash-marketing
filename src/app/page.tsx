import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-screen md:min-h-screen">
      <main className="flex flex-col md:grid grid-cols-12 max-w-7xl md:mx-auto w-full">
        <div className="pt-32 md:pt-0 col-span-5 border-b md:border-b-0 md:border-l md:border-r md:min-h-screen h-full border-dashed border-zinc-800 px-10 md:px-6 flex justify-end flex-col">
          <Image src="/logo.svg" alt="voidhash logo" width={128} height={20} />
          <h1 className="mt-8 text-white text-5xl md:text-6xl font-semibold max-w-sm">
            We are voidhash#
          </h1>
          {/* Socials */}
          <div className="flex gap-2 mt-8 pb-20 md:pb-32 -ml-2">
            <Link
              href="https://github.com/voidhashcom"
              className="p-4 rounded-full bg-zinc-900/50 hover:bg-zinc-900"
            >
              <Image src="/github.svg" alt="GitHub" width={20} height={20} />
            </Link>
            <Link
              href="https://x.com/voidhashcom"
              className="p-4 rounded-full bg-zinc-900/50 hover:bg-zinc-900"
            >
              <Image src="/x-com.svg" alt="X.com" width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="col-span-6 justify-end pb-24 flex flex-col p-6 md:min-h-screen">
          <h2 className="text-white text-lg md:text-xl font-semibold tracking-tight mb-4 ml-3">
            Our projects
          </h2>
          <div className="flex flex-col gap-4 bg-zinc-900/50 p-8 tracking-tight rounded-xl">
            <Image
              src="/chiron.svg"
              alt="Chiron logo"
              width={147 * 0.8}
              height={35 * 0.8}
            />
            <h3 className="sr-only">Chiron</h3>
            <p className="text-lg md:text-2xl mt-2 max-w-md tracking-tight">
              Open-Source TypeScript subscription management library.
            </p>
            <div className="flex gap-2 mt-4">
              <Link
                href="https://chiron.sh"
                className="p-4 flex space-x-2 border border-zinc-900 hover:bg-zinc-900 rounded-full"
              >
                <span className="uppercase font-semibold">Website</span>
                <ArrowUpRight size={24} />
              </Link>
              <Link
                href="https://github.com/voidhashcom/chiron"
                className="p-4 rounded-full border border-zinc-900 bg-zinc-900/50 hover:bg-zinc-900"
              >
                <Image src="/github.svg" alt="GitHub" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
