import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NavItem({ href, title, name, children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function isActiveLink(href) {
    if (href === "/") return router.asPath === "/";
    return router.asPath.includes(href);
  }

  return (
    <>
      <Link key={name} href={href}>
        <li
          className={`hover:scale-102 shadow-cyan-00/50 my-1 w-40 items-center p-2 text-center text-lg font-semibold text-white shadow shadow-indigo-200/40 delay-100 duration-300  ease-in-out hover:-translate-y-1 hover:bg-cyan-500 hover:text-white hover:shadow-cyan-300/50 hover:transition md:rounded-md ${
            isActiveLink(href)
              ? "bg-indigo-600 text-cyan-400  "
              : " text-indigo-600  "
          }`}
          onClick={() => setOpen(!open)}
        >
          {title}
          {open && children}
        </li>
      </Link>
    </>
  );
}
