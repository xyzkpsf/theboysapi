import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[50px] flex flex-row items-center justify-between">
      <div className="ml-[30px]">icon here</div>
      <div className="mr-[30px] flex flex-row gap-x-[20px]">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Docs</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </div>
    </div>
  );
}
