import { useEffect, useState } from "react";

export default function TextField({
  searchProp,
  renderJson = (json) => json.results,
  renderItem = (item) => item,
  value,
  type = "text",
  onChange,
}) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");

  useEffect(async () => {
    const res = await fetch(apiUrl);
    const json = await res.json();
    setItems(renderJson(json));
  }, [apiUrl]);

  function search(items) {
    if (q.length < 3) return items;
    return items.filter((item) =>
      item[searchProp].toLowerCase().includes(q.toLowerCase())
    );
  }

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter by title..."
      />
      <div>{search(items).map((item) => renderItem(item))}</div>
    </>
  );
}
