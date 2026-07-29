export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            OG
          </div>
          <div>
            <h2 className="font-bold text-white">
              Ogaga Elijah
            </h2>
            <p className="text-sm text-blue-300">
              AI Automation Specialist & Consultant
            </p>
          </div>
        </div>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#case-studies" className="hover:text-blue-400 transition">Case Studies</a>
          <a href="#technologies" className="hover:text-blue-400 transition">Technologies</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        <a href="#contact" className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
          Book a Call
        </a>

      </nav>
    </header>
  );
}