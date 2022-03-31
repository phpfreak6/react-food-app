import style from "./Card.module.css";

function Card(properties) {
  return <div className={style.card}>{properties.children}</div>;
}

export default Card;
