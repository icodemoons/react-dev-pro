import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Datatable({ rows = [] }) {
  const columns = Object.keys(rows[0]);
  const [sortedBy, setSortedBy] = useState({
    column: columns[0],
    asc: true,
  });

  const [query, setQuery] = useState("");
  const [count, setCount] = useState(15);

  function sort(rows) {
    const { column, asc } = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) return asc ? -1 : 1;
      if (b[column].toString() > a[column].toString()) return asc ? 1 : -1;
      return 0;
    });
  }

  function filter(rows) {
    return rows.filter((row) =>
      columns.some(
        (column) => row[column].toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const sortFilter = () => sort(filter(rows));

  return (
    <div className="flex w-full flex-col gap-2  ">
      <input
        className="w-full  border-2 border-black p-2 text-gray-800 outline-none placeholder:text-gray-800"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="w-full    border-2 border-black">
        <tr>
          {columns.map((column) => (
            <th className="   border-2 border-black bg-gray-300 p-2 text-left">
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={() =>
                  setSortedBy((prev) => ({
                    column,
                    asc: !prev.asc,
                  }))
                }
              >
                <div>{column}</div>
                <div>
                  {sortedBy.column === column &&
                    (sortedBy.asc ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    ))}
                </div>
              </div>
            </th>
          ))}
        </tr>

        {sortFilter()
          .slice(0, count)
          .map((row) => (
            <tr>
              {columns.map((column) => (
                <td className="border-b border-gray-200 bg-gray-100 p-1 font-thin even:bg-gray-50">
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
      </table>

      {sortFilter().length > count && (
        <div className="w-full text-center">
          <button className="bg-black/70 text-white p-2 rounded-sm" onClick={() => setCount((prev) => prev + 15)}>load more</button>
        </div>
      )}
    </div>
  );
}
