import React, { useState } from "react";
import { dropDownProps } from "../../types/types";
const DropDown = ({ name, arrows, className, icons, list }: dropDownProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className={className}>
      <div className="dropdown__title">
        <a
          onClick={() => {
            setVisibility(!visibility);
          }}
        >
          {name}
        </a>

        {visibility ? <img src={arrows[1]}></img> : <img src={arrows[0]}></img>}
      </div>
      {visibility && (
        <ul>
          {icons
            ? list.map((element, index) => (
                <li className="dropdown__item" key={index}>
                  <img className="dropdown__image" src={icons[index]} />
                  {element}
                </li>
              ))
            : list.map((element, index) => (
                <li className="dropdown__item" key={index}>
                  {element}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
