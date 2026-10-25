import { Link,NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import {FaCaretDown} from "react-icons/fa"
import { ShoppingCartPlus } from 'lucide-react';
import Cart from "../pages/Cart";

const Navbar = () => {
    const location=false;
  return (
    <div className="bg-white py-5 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo and location section  */}
        <div className="flex justify-between gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
         
              <span className="text-red-500 font-serif">Ali</span>-Tech
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500"></MapPin>
            <span className="font-semibold">
              {location ? <div></div> : "Add Adress"}
            </span>
       <FaCaretDown/>
          </div>
        </div>

        <nav className="flex gap-7 items-center">
       <ul className="flex gap-7 text-xl font-semibold">
  <li>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `inline-block pb-1 border-b-2 ${
          isActive ? "border-red-500" : "border-transparent"
        }`
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/products"
      className={({ isActive }) =>
        `inline-block pb-1 border-b-2 ${
          isActive ? "border-red-500" : "border-transparent"
        }`
      }
    >
      Products
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `inline-block pb-1 border-b-2 ${
          isActive ? "border-red-500" : "border-transparent"
        }`
      }
    >
      About
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `inline-block pb-1 border-b-2 ${
          isActive ? "border-red-500" : "border-transparent"
        }`
      }
    >
      Contact
    </NavLink>
  </li>
</ul>
<Link to="/cart" className="relative">
  <ShoppingCartPlus className="h-7 w-7"/>
<span className="bg-red-500 p-2.5 rounded-full -top-3 left-3 absolute text-white h-4 w-4 flex items-center justify-center">0</span>
</Link>
<Link
  to="/login"
  className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"
>
  Login
</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
