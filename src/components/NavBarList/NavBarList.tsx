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
    <nav className="navBarlist">
      <ul className="navBarlist__list">
        <li className="navBarlist__item full">
          <DropDownStyled
            name="Features"
            arrows={arrows}
            list={featuresElements}
            icons={featuresElementsIcons}
          />
        </li>
        <li className="navBarlist__item ">
          <DropDownStyled
            name="Company"
            arrows={arrows}
            list={companyElements}
          />
        </li>

        <li className="navBarlist__item">
          <a className="navBarlist__link" href="#">
            Carrers
          </a>
        </li>
        <li className="navBarlist__item">
          <a className="navBarlist__link" href="#">
            About
          </a>
        </li>
      </ul>
      <ul className="navBarlist__action">
        <li className="navBarlist__item">
          <a className="navBarlist__link" href="#">
            Login
          </a>
        </li>
        <li className="navBarlist__item">
          <StyledButton type="secondary"> Register </StyledButton>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarList;
