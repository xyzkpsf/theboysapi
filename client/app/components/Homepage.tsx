import Image from "next/image";

export default function Homepage() {
  return (
    <div className="text-center h-[180px]">
      <Image src={"/logo.svg"} alt={"logo"} width={"345"} height={"180"} />
    </div>
  );
}
