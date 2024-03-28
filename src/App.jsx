import { useState } from "react";
import "./App.css";
import Item from "./Item";
import CardSum from "./CardSum";

const getränkeListe = [
  {
    name: "Alkoholfreie Getränke",
    items: [
      {
        name: "Apfelschorle",
        price: 2.5,
        volume: 0.5,
      },
      {
        name: "Mineralwasser",
        price: 2.0,
        volume: 0.33,
      },
      {
        name: "Coca-Cola",
        price: 2.2,
        volume: 0.33,
      },
    ],
  },
  {
    name: "Bier",
    items: [
      {
        name: "Helles",
        price: 3.0,
        volume: 0.5,
      },
      {
        name: "Pils",
        price: 3.2,
        volume: 0.5,
      },
      {
        name: "Weizen",
        price: 3.5,
        volume: 0.5,
      },
    ],
  },
  {
    name: "Sekt",
    items: [
      {
        name: "Prosecco",
        price: 4.0,
        volume: 0.75,
      },
      {
        name: "Cava",
        price: 4.5,
        volume: 0.75,
      },
      {
        name: "Champagner",
        price: 6.0,
        volume: 0.75,
      },
    ],
  },
  {
    name: "Wein",
    items: [
      {
        name: "Weißwein",
        price: 5.0,
        volume: 0.75,
      },
      {
        name: "Rotwein",
        price: 5.5,
        volume: 0.75,
      },
      {
        name: "Roséwein",
        price: 5.2,
        volume: 0.75,
      },
    ],
  },
  {
    name: "Aperitif",
    items: [
      {
        name: "Campari",
        price: 4.0,
        volume: 0.2,
      },
      {
        name: "Aperol",
        price: 4.5,
        volume: 0.2,
      },
      {
        name: "Hugo",
        price: 5.0,
        volume: 0.2,
      },
    ],
  },
  {
    name: "Heißgetränke",
    items: [
      {
        name: "Kaffee",
        price: 2.5,
        volume: 0.2,
      },
      {
        name: "Espresso",
        price: 3.0,
        volume: 0.1,
      },
      {
        name: "Cappuccino",
        price: 3.5,
        volume: 0.25,
      },
    ],
  },
];

function App() {
  const [orderList, setOrderList] = useState([]);
  const [itemCounts, setItemCounts] = useState(
    getränkeListe.reduce((acc, kategorie) => {
      kategorie.items.forEach((item) => {
        acc[item.name] = 0;
      });
      return acc;
    }, {})
  );

  function addItemToOrderList(item, amount = 1) {
    // Update itemCounts
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item.name]: prevCounts[item.name] + amount,
    }));

    // Function logic to update orderList (no useState here)
    const existingItem = orderList.find((i) => i.name === item.name);

    if (existingItem) {
      // Update amount of existing item
      const newOrderList = orderList.map((i) => {
        if (i.name === item.name) {
          return { ...i, amount: i.amount + amount };
        }
        return i;
      });
      setOrderList(newOrderList);
    } else {
      // Add new item with amount
      const newItem = { ...item, amount };
      setOrderList([...orderList, newItem]);
    }
  }

  function removeItemFromOrderList(item) {
    // Update itemCounts
    if (itemCounts[item.name] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [item.name]: prevCounts[item.name] - 1,
      }));
    }

    const existingItem = orderList.find((i) => i.name === item.name);

    if (existingItem) {
      if (existingItem.amount === 1) {
        // Entfernen des Elements, wenn amount 1 ist
        setOrderList(orderList.filter((i) => i.name !== item.name));
      } else {
        // Aktualisieren des amount-Werts
        const newOrderList = orderList.map((i) => {
          if (i.name === item.name) {
            return { ...i, amount: i.amount - 1 };
          }
          return i;
        });
        setOrderList(newOrderList);
      }
    }
  }

  function resetOrderList() {
    setOrderList([]);
    setItemCounts(
      getränkeListe.reduce((acc, kategorie) => {
        kategorie.items.forEach((item) => {
          acc[item.name] = 0;
        });
        return acc;
      }, {})
    );
  }

  return (
    <>
      <CardSum orderList={orderList} resetOrderList={resetOrderList} />
      <div>
        {getränkeListe.map((kategorie) => (
          <div key={kategorie.name}>
            <h2>{kategorie.name}</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {kategorie.items.map((getränk) => (
                <li key={getränk.name}>
                  <Item
                    addItemToOrderList={addItemToOrderList}
                    removeItemFromOrderList={removeItemFromOrderList}
                    getränk={getränk}
                    itemCounts={itemCounts}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
