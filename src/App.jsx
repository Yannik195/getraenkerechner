import { useState } from "react";
import "./App.css";
import Item from "./Item";
import CardSum from "./CardSum";

const getränkeListe = [
  {
    name: "Alkoholfreie Getränke",
    items: [
      {
        name: "Tafelwasser gezapft klein",
        price: 2.0,
        volume: 0.2,
      },
      {
        name: "Tafelwasser gezapft groß",
        price: 3.0,
        volume: 0.4,
      },
      {
        name: "Teinacher still Flasche",
        price: 3.0,
        volume: 0.2,
      },
      {
        name: "Cola, Fanta, etc",
        price: 3.0,
        volume: 0.2,
      },
      {
        name: "Cola, Fanta etc",
        price: 5.0,
        volume: 0.4,
      },
      {
        name: "Orangina",
        price: 3.5,
        volume: 0.25,
      },
      {
        name: "Apfelschorle klein",
        price: 3.0,
        volume: 0.2,
      },
      {
        name: "Apfelschorle groß",
        price: 5.0,
        volume: 0.4,
      },
      {
        name: "Holunderschorle klein",
        price: 3.5,
        volume: 0.2,
      },
      {
        name: "Holunderschorle groß",
        price: 6.0,
        volume: 0.4,
      },
      {
        name: "Apfel- oder Orangensaft",
        price: 3.5,
        volume: 0.2,
      },
      {
        name: "Bitter Lemon / Tonic Water",
        price: 3.5,
        volume: 0.2,
      },
      {
        name: "Seezüngle",
        price: 4.0,
        volume: 0.33,
      },
    ],
  },
  {
    name: "Bier",
    items: [
      {
        name: "Kellerbier",
        price: 4.5,
        volume: 0.3,
      },
      {
        name: "Kellerbier",
        price: 5.5,
        volume: 0.5,
      },
      {
        name: "Flasche",
        price: 4.5,
        volume: 0.3,
      },
    ],
  },
  {
    name: "Sekt/Prosecco",
    items: [
      {
        name: "Sekt",
        price: 7.0,
        volume: 0.1,
      },
    ],
  },
  {
    name: "Wein",
    items: [
      {
        name: "klein",
        price: 4.0,
        volume: 0.1,
      },
      {
        name: "groß",
        price: 7.5,
        volume: 0.2,
      },
      {
        name: "Schorle",
        price: 4.5,
        volume: 0.2,
      },
    ],
  },
  {
    name: "Aperitif",
    items: [
      {
        name: "Martini, Aperol etc.",
        price: 8.5,
        volume: 0.2,
      },
    ],
  },
  {
    name: "Heißgetränke",
    items: [
      {
        name: "Espresso/Kaffe/Tee",
        price: 3.0,
      },
      {
        name: "Cappucino",
        price: 3.5,
      },
      {
        name: "Milchkaffe, Latte, 2xEspresso",
        price: 3.0,
      },
    ],
  },
  {
    name: "Snacks",
    items: [
      {
        name: "Snacks",
        price: 2.0,
      },
      {
        name: "Chips",
        price: 2.5,
      },
      {
        name: "Brezel",
        price: 2.0,
      },
      {
        name: "Butter Brezel",
        price: 2.5,
      },
      {
        name: "Brötchen",
        price: 4.0,
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
