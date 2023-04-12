import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-[100px] flex flex-col items-center justify-center pb-[8px]">
      <div className="flex flex-row justify-center items-center gap-x-[50px]">
        <Link
          href={"https://www.theboysapi.com/api/character"}
          target="_blank"
          className="hover:text-SECONDARY"
        >
          Character:&nbsp;73
        </Link>
        <Link
          href={"https://www.theboysapi.com/api/affiliation"}
          target="_blank"
          className="hover:text-SECONDARY"
        >
          Affiliation:&nbsp;22
        </Link>
        <Link
          href={"https://www.theboysapi.com/api/episode"}
          target="_blank"
          className="hover:text-SECONDARY"
        >
          Episode:&nbsp;24
        </Link>
      </div>
      <br />
      <div>
        <span>@2023 By </span>
        <span>
          <Link
            href={"https://github.com/xyzkpsf"}
            target="_blank"
            className="hover:text-SECONDARY"
          >
            Xiaoyi Zhu
          </Link>
        </span>
      </div>
    </div>
  );
}
