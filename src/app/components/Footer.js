export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-gray-600">
          <div className="space-y-1">
            <p>1303 College</p>
            <p>Goshen, IN 46526</p>
            <p className="mt-1">(574) 534-1793</p>
          </div>
          <div className="text-right space-y-1">
            <p className="font-semibold">Hours:</p>
            <p>Mon: 11am - 7pm</p>
            <p>Tuesday: Closed.</p>
            <p>Wed-Sun: 11am - 7pm</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          &copy; 2025 Goshen Noodles. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
