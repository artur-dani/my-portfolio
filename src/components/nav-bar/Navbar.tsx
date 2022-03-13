import Image from 'next/image';

import avatar from '/public/images/avatar.png';

export interface NavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Navbar = ({ isOpen, toggle }: NavbarProps) => {
  return (
    <header className="relative flex items-center justify-between w-full bg-blue-200 shadow-sm">
      <a href="#" className="logo">
        Arti
      </a>

      <nav className="inset-x-0 bottom-0 px-5 mx-auto bg-blue-300">
        <ul className="flex items-center justify-between">
          <li>
            <a
              href="#"
              className="flex flex-col items-center px-6 py-4 hover:bg-orange-500"
            >
              <i className="text-lg bx bx-home-alt"></i>
              <span className="text-sm">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <Image src={avatar} alt="me" width="64" height="64" />
      </div>
    </header>
  );
};

export default Navbar;
