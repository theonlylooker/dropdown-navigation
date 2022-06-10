import React, { useState } from "react";
import { dropDownProps } from "../../types/types";
const DropDown = ({ name, arrows, className, icons, list }: dropDownProps) => {
  const [visibility, setVisibility] = useState(false);
  const [pressedItem, setPressedItem] = useState(false);

  return (
    <div
      className={className}
      onBlur={(e: React.ChangeEvent<HTMLElement>) => {
        setVisibility(false);
      }}
    >
      <button
        className="dropdown__title"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <p className="dropdown__text">{name}</p>

        {visibility ? (
          <img src={arrows[1]}></img>
        ) : (
          <img className="arrow" src={arrows[0]}></img>
        )}
      </button>
      {visibility && (
        <ul
          onClick={() => console.log("asd")}
          onBlur={(e: React.ChangeEvent<HTMLElement>) => {
            setVisibility(false);
          }}
        >
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
