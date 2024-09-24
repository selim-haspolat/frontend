import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-3 border-b">
      <div><p className="text-2xl font-bold">LOGO</p></div>
      <nav>
        <ul className="flex gap-6 font-medium">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button>Start Now</Button>
      </div>
    </header>
  );
};

export default Navbar;
