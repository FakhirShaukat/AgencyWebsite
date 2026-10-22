export default function Footer() {
  return (
      <footer className="border-t border-[#26201C] pt-16 pb-12 px-5 lg:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Oversized Brand Typography (matching Omplixo style from image) */}
          <div className="w-full text-center my-6 select-none">
            <h1 className="text-[13vw] sm:text-[14vw] font-black tracking-tighter leading-none text-zinc-900 hover:text-[#D4F933] transition-colors duration-700">
              Dev.Fakhir
            </h1>
          </div>

          <div className="w-full pt-8 border-t border-[#26201C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 Dev.Fakhir. Based in Karachi, Pakistan.</p>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-zinc-300">About</a>
              <a href="#services" className="hover:text-zinc-300">Services</a>
              <a href="#work" className="hover:text-zinc-300">Work</a>
              <a href="#packages" className="hover:text-zinc-300">Packages</a>
              <a href="#contact" className="hover:text-zinc-300">Contact</a>
            </div>
          </div>

        </div>
      </footer>
  );
}
