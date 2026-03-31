import { Menu, X } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">BikeZone</h1>
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#bikes">Bikes</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <>
            <div className="md:hidden bg-white px-4 pb-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#home" onClick={() => setOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#bikes" onClick={() => setOpen(false)}>
                    Bikes
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
