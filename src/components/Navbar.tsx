export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold">Rishab Thapliyal</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
