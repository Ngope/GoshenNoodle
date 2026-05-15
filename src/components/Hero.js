import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white px-6 py-8 overflow-hidden">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex-1 pr-4">
          <h1
            className="text-5xl font-black leading-none tracking-tight"
            style={{ fontFamily: 'var(--font-afacad), sans-serif' }}
          >
            GOSHEN
            <br />
            NOODLE
          </h1>
          <p className="text-gray-500 mt-3 text-sm">Discover the authentic taste of Vietnam.</p>
        </div>

        <div className="relative w-44 h-44 flex-shrink-0">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#F45B42]" />
          <Image
            src="/pho.png"
            alt="Bowl of pho"
            width={128}
            height={128}
            className="absolute top-3 right-3 w-32 h-32 rounded-full object-cover z-10"
          />
          <div className="absolute -bottom-1 right-8 w-7 h-7 rounded-full bg-green-400 z-20" />
          <div className="absolute bottom-2 right-1 w-4 h-4 rounded-full bg-teal-300 z-20" />
        </div>
      </div>
    </section>
  );
}
