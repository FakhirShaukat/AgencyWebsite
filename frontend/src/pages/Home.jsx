import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {
  FiArrowUpRight,
  FiMessageSquare,
  FiGlobe,
  FiSmartphone,
  FiMapPin,
  FiShare2,
  FiRefreshCw,
  FiCheck,
} from 'react-icons/fi';



// Contact configuration
const CONFIG = {
  whatsapp: "923312608373",
  email: "fakhirshaukat8@gmail.com",
};

export default function DevFakhirAgency() {

  const whatsappHref = CONFIG.whatsapp
    ? `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}`
    : null;
  const contactHref = whatsappHref || `mailto:${CONFIG.email}`;

  const isExternalContact = contactHref.startsWith("http");

  return (
    <div className="min-h-screen bg-[#0D0B0A] text-white font-['Poppins',sans-serif] selection:bg-[#FF5500] selection:text-white antialiased">

      <Navbar contactHref={contactHref} isExternalContact={isExternalContact} />

      <main id="top">

        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
          {/* Subtle Glow Overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF5500]/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 text-center flex flex-col items-center">

            {/* Agency Pill Badge */}
            <span className="inline-flex items-center gap-2 bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-sm">
              DIGITAL AGENCY & STUDIO
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.08] max-w-5xl text-white">
              Websites that bring local customers through your door<span className="text-[#FF5500]">.</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed font-light">
              We build fast, good-looking websites and simple digital tools for cafés, restaurants, and gyms across Karachi, Pakistan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <a
                href={contactHref}
                target={isExternalContact ? "_blank" : undefined}
                rel={isExternalContact ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#FF5500] text-white hover:bg-[#E64D00] transition-all duration-300 shadow-xl shadow-[#FF5500]/25 hover:scale-[1.02]"
              >
                Start your project
                <FiArrowUpRight className="text-lg" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-white hover:text-white transition-all duration-300"
              >
                See our work
              </a>
            </div>

            {/* Hero Image / Banner Showcase Block */}
            <div className="w-full mt-16 rounded-3xl overflow-hidden border border-[#26201C] bg-[#14100E] p-3 shadow-2xl">
              <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1C1714] to-[#0D0B0A] flex items-center justify-center border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                  alt="Dev.Fakhir Team & Studio"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-75 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-left">
                  <span className="text-[#D4F933] text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Karachi · Pakistan
                  </span>
                  <p className="text-xl sm:text-2xl font-medium text-white max-w-xl">
                    Crafting digital presence for thriving local businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Categories Ribbon */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
              <span className="text-xs uppercase tracking-widest text-zinc-500 mr-2 font-medium">Specialized in:</span>
              {["Cafés", "Restaurants", "Gyms", "Local shops"].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#26201C] bg-[#14100E] text-zinc-300 rounded-full px-5 py-2 text-xs font-medium hover:border-[#D4F933] hover:text-[#D4F933] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#26201C] bg-[#14100E] p-7 sm:p-10 md:grid-cols-[1.3fr_0.7fr] md:items-center md:p-14">
            <div>
              <span className="mb-5 inline-flex rounded-full bg-[#D4F933] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                About the studio
              </span>
              <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-tight text-white sm:text-5xl">
                Built with care, led by a software engineer
                <span className="text-[#FF5500]">.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Dev.Fakhir is a digital agency founded in Karachi in 2026. We help local businesses build a thoughtful online presence through well-crafted websites and practical digital experiences.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#33271F] bg-[#0D0B0A] p-7 sm:p-9">
              <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full bg-[#FF5500]/15 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4F933]">
                  Founder
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Fakhir Shaukat
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-400">
                  Software Engineer
                </p>
                <div className="mt-7 border-t border-[#26201C] pt-5 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Founded in <span className="ml-2 font-semibold text-zinc-200">2026 · Karachi</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION (Light / Cream Contrast Block like design) */}
        <section id="services" className="bg-[#FAF9F5] text-black py-20 md:py-32 rounded-[2.5rem] my-4 mx-2 sm:mx-4 px-5 lg:px-10">
          <div className="max-w-7xl mx-auto">

            {/* Section Tag */}
            <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              Services
            </span>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-tight max-w-3xl">
              Everything a local business needs online<span className="text-[#FF5500] font-bold">.</span>
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {[
                {
                  icon: <FiGlobe className="text-2xl text-[#FF5500]" />,
                  title: "Business website",
                  desc: "A clean, mobile-first site with your story, photos, hours, and location, built to load fast on any phone."
                },
                {
                  icon: <FiSmartphone className="text-2xl text-[#FF5500]" />,
                  title: "Menus, orders & bookings",
                  desc: "Digital menus, QR codes, table reservations, class schedules, and membership sign-ups, depending on your business."
                },
                {
                  icon: <FiMapPin className="text-2xl text-[#FF5500]" />,
                  title: "Google Maps & local search",
                  desc: "We set up and tidy your Google Business Profile so people nearby can find you, call you, and get directions."
                },
                {
                  icon: <FiMessageSquare className="text-2xl text-[#FF5500]" />,
                  title: "WhatsApp ready",
                  desc: "One-tap WhatsApp buttons so customers can order, ask, or book in the app they already use every day."
                },
                {
                  icon: <FiShare2 className="text-2xl text-[#FF5500]" />,
                  title: "Social media",
                  desc: "Consistent posts and profile setup for Instagram and Facebook that match your website and brand."
                },
                {
                  icon: <FiRefreshCw className="text-2xl text-[#FF5500]" />,
                  title: "Updates & support",
                  desc: "New menu, new prices, new timings? Send us a message and we update the site for you."
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="border border-[#E8E6DF] rounded-2xl p-8 bg-white hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] border border-[#E8E6DF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BUILT FOR YOU SECTION (Dark Featured Grid) */}
        <section className="py-20 md:py-32 px-5 lg:px-10">
          <div className="max-w-7xl mx-auto">

            <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Built for you
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight max-w-3xl">
              Different businesses, different needs<span className="text-[#FF5500]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              {[
                {
                  title: "Cafés",
                  bullets: [
                    "Online menu with photos",
                    "Location, hours, and Maps link",
                    "Instagram feed on the site"
                  ]
                },
                {
                  title: "Restaurants",
                  bullets: [
                    "Menu with categories and prices",
                    "Table booking and WhatsApp orders",
                    "Event and catering enquiry form"
                  ]
                },
                {
                  title: "Gyms",
                  bullets: [
                    "Plans and membership sign-up",
                    "Class timings and trainer profiles",
                    "Trial-session booking"
                  ]
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className="border border-[#26201C] rounded-2xl p-8 bg-[#14100E] hover:border-[#FF5500]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#26201C]">
                      <h3 className="text-2xl font-medium text-white">{card.title}</h3>
                      <span className="w-3 h-3 rounded-full bg-[#FF5500]" />
                    </div>
                    <ul className="space-y-4 text-sm text-zinc-300">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <FiCheck className="text-[#D4F933] text-lg flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="bg-[#FAF9F5] text-black py-20 md:py-32 rounded-[2.5rem] my-4 mx-2 sm:mx-4 px-5 lg:px-10">
          <div className="max-w-7xl mx-auto">

            <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              How it works
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-tight max-w-3xl">
              From first chat to live website<span className="text-[#FF5500] font-bold">.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {[
                {
                  num: "01",
                  title: "Talk",
                  desc: "A short call or visit to understand your business, your customers, and what you want the site to do."
                },
                {
                  num: "02",
                  title: "Design",
                  desc: "You see a clear layout in black-and-white simplicity or your own brand colours before we build."
                },
                {
                  num: "03",
                  title: "Build",
                  desc: "We develop the site with React and modern tools, test it on real phones, and fix what needs fixing."
                },
                {
                  num: "04",
                  title: "Launch & support",
                  desc: "Your site goes live on your own domain, and we stay available for changes after launch."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col justify-between border-t border-[#E8E6DF] pt-8">
                  <div>
                    <span className="text-4xl font-extrabold text-[#FF5500] tracking-tight block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900">{step.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-20 md:py-32 px-5 lg:px-10">
          <div className="max-w-7xl mx-auto">

            <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Work
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight max-w-3xl">
              Recent projects<span className="text-[#FF5500]">.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  meta: "Café website · Karachi",
                  title: "Del Frio",
                  desc: "A full café and restaurant website for a business in the heart of Karachi.",
                  link: "https://del-frio.netlify.app/",
                  btnText: "View live site"
                },
                {
                  meta: "Restaurant website · Karachi",
                  title: "Coconut Groove Restaurant",
                  desc: "A restaurant website for a business in the heart of Karachi.",
                  link: "https://coconutgroove.netlify.app/",
                  btnText: "View live site"
                },
              ].map((proj, idx) => (
                <a
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group border border-[#26201C] rounded-2xl p-6 bg-[#14100E] hover:border-[#D4F933] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-[#D4F933] font-medium block mb-3 uppercase tracking-wider">
                      {proj.meta}
                    </span>
                    <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#D4F933] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{proj.desc}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#26201C] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#FF5500] transition-colors">
                    <span>{proj.btnText}</span>
                    <FiArrowUpRight className="text-lg transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* PACKAGES SECTION */}
        <section id="packages" className="bg-[#FAF9F5] text-black py-20 md:py-32 rounded-[2.5rem] my-4 mx-2 sm:mx-4 px-5 lg:px-10 scroll-mt-24">
          <div className="max-w-7xl mx-auto">

            <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
              Straightforward pricing
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-tight max-w-3xl">
              The right website for your next step<span className="text-[#FF5500] font-bold">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
              Choose a focused, polished website or a fully custom brand experience with integrations and ongoing care.
            </p>

            <div className="grid grid-cols-1 items-stretch gap-6 mt-12 lg:grid-cols-2">
              {[
                {
                  name: "Essential",
                  price: "39,999",
                  summary: "A professional, responsive website built around your business requirements.",
                  features: [
                    "Standard website tailored to your requirements",
                    "Responsive UI for mobile, tablet, and desktop",
                    "Clean, clear, easy-to-use design",
                    "Instagram profile integration",
                    "Direct-message (DM) integration",
                  ],
                  featured: false,
                },
                {
                  name: "Signature",
                  price: "59,999",
                  summary: "A custom, animated website shaped around your brand, with integrations and post-launch maintenance.",
                  features: [
                    "Responsive, clear UI tailored to your brand",
                    "Custom website (not a standard template)",
                    "Brand-led animations and interactions",
                    "Instagram profile and DM integration",
                    "Digital menu integration",
                    "WhatsApp integration",
                    "Website maintenance after deployment",
                  ],
                  featured: true,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${
                    plan.featured
                      ? "border-[#26201C] bg-[#14100E] text-white"
                      : "border-[#E8E6DF] bg-white text-neutral-900"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#D4F933] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black sm:right-8 sm:top-8">
                      Best value
                    </span>
                  )}

                  <div>
                    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${plan.featured ? "text-[#D4F933]" : "text-[#FF5500]"}`}>
                      {plan.name}
                    </p>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        Rs. {plan.price}
                      </span>
                      <span className={`text-xs ${plan.featured ? "text-zinc-400" : "text-neutral-500"}`}>
                        PKR
                      </span>
                    </div>
                    <p className={`mt-4 min-h-12 text-sm leading-relaxed ${plan.featured ? "text-zinc-300" : "text-neutral-600"}`}>
                      {plan.summary}
                    </p>

                    <div className={`my-7 border-t ${plan.featured ? "border-[#26201C]" : "border-[#E8E6DF]"}`} />

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li className="flex items-start gap-3 text-sm leading-relaxed" key={feature}>
                          <FiCheck className={`mt-0.5 shrink-0 text-lg ${plan.featured ? "text-[#D4F933]" : "text-[#FF5500]"}`} />
                          <span className={plan.featured ? "text-zinc-200" : "text-neutral-700"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      plan.featured
                        ? "bg-[#D4F933] text-black hover:bg-[#c4e62e]"
                        : "bg-[#FF5500] text-white hover:bg-[#E64D00]"
                    }`}
                    href={contactHref}
                    rel={isExternalContact ? "noreferrer" : undefined}
                    target={isExternalContact ? "_blank" : undefined}
                  >
                    Choose {plan.name}
                    <FiArrowUpRight className="text-lg" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section id="contact" className="py-20 md:py-32 px-5 lg:px-10">
          <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#181412] to-[#0D0B0A] border border-[#26201C] rounded-[2.5rem] p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Glow accent */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF5500]/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block bg-[#D4F933] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                Get Started
              </span>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                Let’s get your business online<span className="text-[#FF5500]">.</span>
              </h2>

              <p className="text-zinc-400 text-base sm:text-lg mt-6 leading-relaxed font-light">
                Tell us about your café, restaurant, or gym. We’ll reply with ideas and a clear plan for your website.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#FF5500] text-white hover:bg-[#E64D00] transition-all duration-300 shadow-xl shadow-[#FF5500]/20"
                  >
                    Message us on WhatsApp
                    <FiArrowUpRight className="text-lg" />
                  </a>
                ) : (
                  <button
                    aria-label="WhatsApp contact unavailable until a phone number is configured"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[#FF5500]/60 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-[#FF5500]/10"
                    disabled
                    title="Add a WhatsApp number in the contact configuration to enable this button."
                    type="button"
                  >
                    WhatsApp number needed
                    <FiArrowUpRight className="text-lg" />
                  </button>
                )}
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-white hover:text-white transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}