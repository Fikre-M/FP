import Logo from "../Logo/Logo";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141F2E] shadow-md mt-12">
      {/* Mobile: Logo centered */}
      <div className="flex md:hidden justify-center py-4">
        <a href="#home" className="block text-white w-48">
          <Logo />
        </a>
      </div>
      {/* Desktop: Logo left, nav right */}
      <nav className="container mx-auto px-4 py-4 hidden md:flex items-center justify-between">
        <a href="#home" className="text-white w-48">
          <Logo />
        </a>
        <ul className="flex space-x-8 text-white text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
