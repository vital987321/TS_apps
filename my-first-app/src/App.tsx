//App.tsx
import "./App.css";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { ListGroup } from "./Components/ListGroup";
import { bsButtonStrength } from "./models/bsButtonStrength";

function App() {
  let items = ["item1", "item2", "item3", "item4"];
  const heading = "List items";

  const handlerSelectItem = (item: string) => console.log(item);

  return (
    <>
      //{" "}
      <div>
        <ListGroup
          items={items}
          heading={heading}
          onSelectItem={handlerSelectItem}
        />
      </div>
      <Alert>
        <b>Hello</b>
      </Alert>
      <Button strength={bsButtonStrength.success} onClick={()=>console.log("clicked")}>
        Start <b>!</b>
      </Button>
    </>
  );
}

export default App;
