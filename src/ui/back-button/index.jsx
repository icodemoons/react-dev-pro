export default function BackButton({
  href,
  className,
  src,
  loading,
  onClick = (e) => e.target.vaule,
}) {
  return (
    <div onClick={(e) => e.target.vaule} className={className}>
      <img className={className} href={href} src={src} />
    </div>
  );
}
