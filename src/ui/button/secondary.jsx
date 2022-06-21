import Button from ".";

export default function SecondaryButton({ children, ...rest }) {
  return (
    <Button {...rest} className="text-white bg-green-600 border-green-700">
      {children}
    </Button>
  );
}
