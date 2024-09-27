import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-3">
      <div><h2 className="text-2xl font-bold">LOGO</h2></div>
      <nav>
        <ul className="flex gap-6 font-medium text-slate-600">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Navbar;
