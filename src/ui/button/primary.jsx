import Button from ".";
export default function OutlineButton({ children, ...rest }) {
  return (
    <Button type="button" className="text-white bg-indigo-600 border-blue-500">
      {children}
    </Button>
  );
}
