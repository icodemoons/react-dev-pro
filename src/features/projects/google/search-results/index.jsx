export default function SearchResults({ title, snippet, formattedUrl, link }) {
  return (
    <>
      <div className="mx-auto p-5 text-left lg:w-5/6">
        <div key={link}>
          <div>
            <a href={link} className="text-sm">
              {formattedUrl}
            </a>
            <a href={link}>
              <h2 className="text-xl font-medium text-blue-800">{title}</h2>
            </a>
          </div>
          <p className="overflow-auto break-words">{snippet}</p>
        </div>
      </div>
    </>
  );
}
