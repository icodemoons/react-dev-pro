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

 

  return (
    <div className="mx-auto w-full flex-col text-center">
      <div>
       
      </div>
      <div className="mx-auto flex w-full flex-wrap justify-center">
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );
}
