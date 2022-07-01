

function ListItems({items, render}) {
  return (
    <div>{items.map((item) =>(
        <li>{render(item)}</li>
    ))}</div>
  )
}

export default index