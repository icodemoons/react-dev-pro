export default function Section({ children, title, className }) {
  return (
    <>
      {/* {anchor && <a name={anchor} />} */}
      <div className={`justify-items-center p-4 m-4 ${className}`}>
        <h2 className="text-center text-6xl mb-4 leading-snug tracking-loose">
          {/* {title} */}
        </h2>

        {children}
      </div>
    </>
  );
}
