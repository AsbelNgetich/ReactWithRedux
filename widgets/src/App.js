import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among Engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "breen",
  },
  {
    label: "Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/*<Search />*/}
      <DropDown
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
