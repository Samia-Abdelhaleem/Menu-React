import React, { useState, useEffect } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
const allCategories = ["all",...new Set(items.map((item) => item.category))];
// console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // console.log(menuItems)
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterItems={filterItems}
          categories={categories}
        ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
