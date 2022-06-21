export default function Pill({ href, isActive, children }) {
  return (
    <li className="mt-1 inline-flex  flex-wrap justify-between space-x-2   text-center text-sm   ">
      <a
        href={href}
        className="w-20 rounded-full bg-indigo-600 p-2 text-xs text-white"
      >
        {children}
      </a>
    </li>
  );
}
