//App.tsx
import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import AlertDismissing from "./Components/AlertDismissing";
import Button from "./Components/Button";
import { ListGroup } from "./Components/ListGroup";
import { bsButtonStrength } from "./models/bsButtonStrength";

function App() {
  let items = ["item1", "item2", "item3", "item4"];
  const heading = "List items";

  const handlerSelectItem = (item: string) => console.log(item);

  const [isAlertVisible, setIsAlertVisible] = useState(false);

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
      {isAlertVisible && (
        <AlertDismissing onClose={() => setIsAlertVisible(false)}>
          My alert
        </AlertDismissing>
      )}
      <Button
        strength={bsButtonStrength.success}
        onClick={() => setIsAlertVisible(true)}
      >
        Start <b>!</b>
      </Button>
    </>
  );
}

export default App;
