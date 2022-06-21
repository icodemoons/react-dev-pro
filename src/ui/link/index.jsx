import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Link({
  href,
  children,
  activeClassName = "font-bold text-indigo-600 underline transition-transform origin-center delay-300",
  className = "font-thin",
}) {
  const hoverCss =
    "hover:font-bold hover:text-indigo-600 hover:underline hover:transition-transform hover:origin-center hover:delay-300";
  const router = useRouter();
  return (
    <>
      <NextLink href={href}>
        <a
          className={`${
            router.asPath === href ? activeClassName : ""
          } ${className} ${hoverCss}`}
        >
          {children}
        </a>
      </NextLink>
    </>
  );
}
