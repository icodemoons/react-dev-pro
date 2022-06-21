import { useState } from "react";

export default function Nav({ children }) {
  return (
    <nav>
      <DesktopMenu>{children}</DesktopMenu>
      <MobileMenu>{children}</MobileMenu>
    </nav>
  );
}

function DesktopMenu({ children }) {
  return (
    <div className="hidden w-full justify-between p-5 px-6 pt-10 text-2xl font-medium text-black md:block">
      <ul className="flex w-full space-x-3 ">{children}</ul>
    </div>
  );
}

function MobileMenu({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-full md:hidden
    "
    >
      <div className="m-2 flex" onClick={() => setOpen(true)}>
        <img className="float-left inline-flex" src="/images/burger.png" />
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed  top-0 left-0 right-0 border  bg-black"
        >
          <img className="m-2 flex" src="/images/x.png" />

          <ul className="flex-grow ">{children}</ul>
        </div>
      )}
    </div>
  );
}
