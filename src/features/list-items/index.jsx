export default function ListItems({items, render}) {
  return (
    <div>{items.map((item) =>(
        <li>{render(item)}</li>
    ))}</div>
  )
}
