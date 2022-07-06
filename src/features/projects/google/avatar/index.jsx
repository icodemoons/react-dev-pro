export default function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`h-10 transform cursor-pointer rounded-full
       transition duration-150 hover:scale-110 ${className}`}
      src={url}
      alt="profile pic"
    />
  );
}
