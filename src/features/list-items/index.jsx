export default function ListItems({items, id, render}) {
  return (
    <ul>
        { items.map((item) => (
        <li key={item[id]}>{render(item)}</li>
        ))}
    </ul>
  )
}

