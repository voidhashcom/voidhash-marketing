import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <div className="min-w-screen md:min-h-screen">
      <main className="flex h-screen w-full max-w-7xl flex-col pt-20 md:mx-auto">
        <Hero />
      </main>
    </div>
  );
}
