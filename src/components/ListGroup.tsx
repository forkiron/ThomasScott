import { useState } from "react";
interface ListGroupProps {
  items: string[];
  firstHeading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, firstHeading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // hook

  /* ineffective, as it repeats code
  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    );
  }
  */
  // const way: const cond = items.length === 0 ? <p>no item found</p> : null;
  /* function way: function FinishCond() {
    return items.length === 0 ? <p>no item found</p> : null;
  }
  */
  // event handler, still a function just no curly braces since you aren't calling it

  /*
  const doClick = (event: MouseEvent, item: string, index: number) => {
    console.log(event);
    console.log(item);
    console.log(index);
  };
  */

  return (
    <>
      <h1>{firstHeading}</h1>
      {/* this is fine, but it makes the code very messy, 
      store it outside as a const or a function
      {items.length === 0 ? <p>no item found</p> : null}
      */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            //onClick={(event) => doClick(event, item, index)}
          >
            {" "}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
