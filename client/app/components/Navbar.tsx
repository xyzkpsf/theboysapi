import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[50px] flex flex-row items-center justify-between">
      <div className="ml-[30px]">
        <Image
          src={"/logo_simple.svg"}
          alt={"logo"}
          width={"40"}
          height={"40"}
        />
      </div>
      <div className="mr-[30px] flex flex-row gap-x-[20px]">
        <Link href={"/"} className="hover:text-SECONDARY">
          Home
        </Link>
        <Link href={"/"} className="hover:text-SECONDARY">
          Docs
        </Link>
        <Link href={"/about"} className="hover:text-SECONDARY">
          About
        </Link>
        <Link href={"/"} className="hover:text-SECONDARY">
          Contact
        </Link>
      </div>
    </div>
  );
}
