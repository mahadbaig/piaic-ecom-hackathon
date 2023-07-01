import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full h-fit p-2.5 justify-between items-center">
      <div className="w-fit flex flex-wrap items-center justify-between">
        <Link href={"/"}>
          <Image src="/Logo.png" width={200} height={0} alt="Logo" />
        </Link>
      </div>

    {/* search bar */}
      <div className="w-2/6 border border-black rounded-full flex flex-row px-1.5 lg:block md:block">
        <Image
          src="/search icon.svg"
          width={25}
          height={25}
          alt="search icon"
          className=""
        />
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          className="flex items-center py-1.5 px-2.5 active:outline-none focus:outline-none "
          placeholder="Search"
        />
      </div>

    {/* nav link */}

      <div className="flex justify-between items-center p-3.5 w-2/6 hidden lg:block md:block">
        <Link className="text-lg" href={"/"}>
          Female
        </Link>
        <Link className="text-lg" href={"/"}>
          Male
        </Link>
        <Link className="text-lg" href={"/"}>
          Kids
        </Link>
        <Link className="text-lg" href={"/"}>
          All Products
        </Link>
      </div>

      <div className="bg-gray-400 p-2.5 rounded-full hidden lg:block md:block">
        <Image src="/cart icon.svg" width={25} height={25} alt="cart icon" />
      </div>

      <div className="block lg:hidden md:hidden">
        <Image src="/hamburger.svg" width={25} height={25} alt="hamburger" />
      </div>
    </nav>
  );
};

export default Navbar;
