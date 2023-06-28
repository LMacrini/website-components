import React, { useState } from "react";
import {
  ExclamationTriangleIcon,
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

function Icon({ type }) {
  switch (type) {
    case "W":
      return (
        <ExclamationTriangleIcon
          className="h-5 w-5 text-yellow-400"
          aria-hidden="true"
        />
      );
    case "E":
      return (
        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
      );
    case "C":
      return (
        <CheckCircleIcon
          className="h-5 w-5 text-green-400"
          aria-hidden="true"
        />
      );
    default:
      return (
        <InformationCircleIcon
          className="h-5 w-5 text-blue-400"
          aria-hidden="true"
        />
      );
  }
}

function Button({ x, buttonClass, onXClick }) {
  if (!x) {
    return;
  }
  return (
    <div className="ml-auto pl-3">
      <div className="-mx-1.5 -my-1.5">
        <button type="button" className={buttonClass} onClick={onXClick}>
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ({ block, children }) => {
  const properties = block.items[0].body.properties;
  const type = properties.type;
  const border = properties.border;
  const x = properties.x;
  const [state, setState] = useState(true);

  function handleClick() {
    setState(false);
  }

  let bgColour, borderColour, buttonClass;

  switch (type) {
    case "W":
      bgColour = "bg-yellow-50 p-4";
      borderColour = " border-l-4 border-yellow-400";
      buttonClass =
        "inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50";
      break;
    case "E":
      bgColour = "bg-red-50 p-4";
      borderColour = " border-l-4 border-red-400";
      buttonClass =
        "inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50";
      break;
    case "C":
      bgColour = "bg-green-50 p-4";
      borderColour = " border-l-4 border-green-400";
      buttonClass =
        "inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50";
      break;
    default:
      bgColour = "bg-blue-50 p-4";
      borderColour = " border-l-4 border-blue-400";
      buttonClass =
        "inline-flex rounded-md bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50";
      break;
  }

  return state == true ? (
    <div className={bgColour + (border ? borderColour : "")}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon type={type} />
        </div>
        <div className="ml-3">{children}</div>
        <Button x={x} buttonClass={buttonClass} onXClick={handleClick} />
      </div>
    </div>
  ) : (
    <></>
  );
};
