import React, { Children, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tab({ name, value, onTabClick }) {
  return (
    <button
      onClick={onTabClick}
      className={classNames(
        value
          ? "bg-indigo-100 text-indigo-700"
          : "text-gray-500 hover:text-gray-700",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={value ? "page" : undefined}
    >
      {name}
    </button>
  );
}

export default function Example({ children }) {
  const [tabsState, setTabsState] = useState(0);

  function handleClick(i) {
    setTabsState(i);
  }
  const tabs = Array.from(children.props.blocks);
  console.log(Children.toArray(children));

  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs[0][1].title}
          >
            {tabs.map((tab) => (
              <option key={tab[1].title}>{tab[1].title}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab, index) => (
              <Tab
                name={tab[1].title}
                value={tabsState === index}
                onTabClick={() => handleClick(index)}
              />
            ))}
          </nav>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
