export default function HeaderOption({ Icon, title }) {
  return (
    <div
      className={`flex cursor-pointer flex-wrap items-center 
      justify-evenly space-x-1 border-b-4 border-transparent pb-3 hover:border-blue-500 hover:text-blue-500 sm:inline-flex`}
    >
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}
