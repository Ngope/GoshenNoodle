export default function Contact() {
  return (
    <section className="bg-[#F45B42] py-12 px-6">
      <div className="max-w-2xl mx-auto flex gap-6 items-start">
        <div className="flex-1 text-white text-sm space-y-1">
          <p className="font-semibold text-base">1303 College</p>
          <p>Goshen, IN 46526</p>
          <p className="mt-2">(574) 534-1793</p>
          <div className="mt-3">
            <p className="font-semibold">Hours:</p>
            <p>Mon: 11am - 7pm</p>
            <p>Tuesday: Closed.</p>
            <p>Wed-Sun: 11am - 7pm</p>
          </div>
        </div>

        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.588370033123!2d-85.81656569699484!3d41.56700305677343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816ed60bd63323d%3A0x1c1eb390883272c2!2sGoshen%20Noodles!5e0!3m2!1sen!2sus!4v1715649856224!5m2!1sen!2sus"
            className="w-full h-44 rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
