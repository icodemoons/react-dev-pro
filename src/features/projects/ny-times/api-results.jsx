import { useEffect, useState } from "react";

export default function ApiResults({
  apiUrl,
  searchProp,
  renderJson = (json) => json.results,
  renderItem = (item) => item,
}) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl);
      const json = await res.json();
      setItems(renderJson(json));
      console.log(json);
    })();
  }, [apiUrl]);

  // function search(items) {
  //   if (q.length < 3) return items;
  //   return items.filter((item) =>
  //     item[searchProp].toLowerCase().includes(q.toLowerCase())
  //   );
  // }

  return (
    <div className="mx-auto w-full flex-col text-center">
      <div>
        {/* <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by results..."
          className="mb-10 h-10 w-1/2 cursor-text rounded-xl bg-gray-400/30 p-5 text-black shadow-cyan-500 focus-within:bg-white"
        /> */}
      </div>
      <div className="mx-auto flex w-full flex-wrap justify-center">
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );
}
