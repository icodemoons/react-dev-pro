import Button from ".";

export default function OutlineButton({ children, ...rest }) {
  return (
    <Button {...rest} className="text-black bg-white border-white-700">
      {children}
    </Button>
  );
}
