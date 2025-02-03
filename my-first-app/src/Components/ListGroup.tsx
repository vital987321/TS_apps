import { useState } from "react";

interface ListGroupProps{
  items:string[]
  heading:string
  onSelectItem:(item:string)=>void
}

export function ListGroup({items, heading, onSelectItem}:ListGroupProps) {
  const [activeIndex, setActiveIndex]=useState(-1)
  const handleClick=(index:number)=>setActiveIndex(index)
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map(
          (item, index) => (
            <li className={activeIndex===index ? "list-group-item active" : "list-group-item"}
                key={item}
                onClick={()=>{
                  handleClick(index)
                  onSelectItem(item)
                }
                }
            >
              {item}
            </li>
          )
        )
        }
      </ul>
    </>
  );
}
