import React from "react";
import todo from "../../assets/images/icon-todo.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import reminders from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";
import up from "../../assets/images/icon-arrow-up.svg";
import down from "../../assets/images/icon-arrow-down.svg";
import { DropDownStyled } from "../DropDown/DropDown.style";
import { StyledButton } from "../Button/Button.style";
const NavBarList = () => {
  const featuresElements: string[] = [
    "Todo List",
    "Calendar",
    "Reminders",
    "Planing",
  ];

  const featuresElementsIcons: string[] = [todo, calendar, reminders, planning];
  const companyElements: string[] = ["History", "Our Team", "Blog"];
  const arrows: string[] = [down, up];
  return (
    <div className="navBarlist">
      <ul className="navBarlist__list">
        <li className="navBarlist__item">
          <DropDownStyled
            name="Feauters"
            arrows={arrows}
            list={featuresElements}
            icons={featuresElementsIcons}
          />
        </li>
        <li className="navBarlist__item">
          <DropDownStyled
            name="Company"
            arrows={arrows}
            list={companyElements}
          />
        </li>

        <li className="navBarlist__item">Careers</li>
        <li className="navBarlist__item">About</li>
      </ul>
      <ul className="navBarlist__action">
        <li className="navBarlist__item">Login</li>
        <li className="navBarlist__item">
          <StyledButton type="secondary"> Register </StyledButton>
        </li>
      </ul>
    </div>
  );
};

export default NavBarList;
