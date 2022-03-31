import { Fragment } from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import style from "../Header/Header.module.css";
import meals_image from "../../../assets/meals.jpg";

const Header = (properties) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClickCartButton={properties.onClickCartButton} />
      </header>
      <div className={style["main-image"]}>
        <img src={meals_image} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
