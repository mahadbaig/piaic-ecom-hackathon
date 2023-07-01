import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex lg:flex-row md:flex-row flex-col w-full h-fit lg:p-2.5 md:p-2.5 p-1 justify-between items-center">

      {/* Logo and hamburger */}

      <div className="lg:w-fit md:w-fit w-full flex flex-wrap items-center justify-between py-2.5">
        <Link href={"/"}>
          <Image src="/Logo.png" width={200} height={0} alt="Logo" />
        </Link>

        <div className="block lg:hidden md:hidden">
          <Menu />
        </div>
      </div>

      {/* search bar */}

      <div className="flex lg:w-2/6 md:w-2/6 w-full border border-black rounded-full px-1.5 items-center">
       <Search />
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          className="flex w-11/12 items-center py-1.5 px-2.5 bg-transparent active:outline-none focus:outline-none "
          placeholder="Search"
        />
      </div>

      {/* nav link */}

      <div className="flex w-2/6 justify-between hidden lg:flex">
        <Link className="text-lg" href="/female">
          Female
        </Link>
        <Link className="text-lg" href={"/male"}>
          Male
        </Link>
        <Link className="text-lg" href={"/kids"}>
          Kids
        </Link>
        <Link className="text-lg" href={"/all"}>
          All Products
        </Link>
      </div>

      <div className="bg-gray-400 p-2.5 rounded-full hidden lg:block md:block">
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
