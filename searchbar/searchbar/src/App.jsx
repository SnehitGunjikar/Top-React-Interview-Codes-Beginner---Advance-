import React, { useState } from "react";

const Searchbar = ({ items }) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));


  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      <ul>{filteredItems.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );

};

const App = () => {
  const items = ["coconut", "apple", "banana", "orange", "date", "grapes", "mango"];
  return (
    <div>
      <Searchbar items={items} />
    </div>
  );
}

export default App;
