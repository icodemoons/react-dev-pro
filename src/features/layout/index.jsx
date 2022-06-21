import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, className }) {
  return (
    <>
      <div className={`${className} mx-auto w-full`}>
        <Header />
        <div className=" ">{children}</div>
      </div>
    </>
  );
}
