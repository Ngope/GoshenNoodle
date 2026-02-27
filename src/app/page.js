import Hero from './components/Hero';
import Carousel from './components/Carousel';
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carousel />
      <Analytics />
    </main>
  );
}
