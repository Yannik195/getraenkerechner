import { useState } from "react";
import "./App.css";
import Item from "./Item";

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
  return (
    <>
      <div>
        {getränkeListe.map((kategorie) => (
          <div key={kategorie.name}>
            <h2>{kategorie.name}</h2>
            <ul style={{ listStyle: "none", padding: "0" }}>
              {kategorie.items.map((getränk) => (
                <li key={getränk.name}>
                  <Item getränk={getränk} />
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
