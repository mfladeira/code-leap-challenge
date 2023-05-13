import { Fragment } from "react";
import "./Card.scss";

interface ICard {
  children: React.ReactNode;
  width: number;
  title: string;
  buttons: React.ReactNode[];
}

export const Card = (props: ICard) => {
  return (
    <div className="Card" style={{ width: props.width }}>
      <h3 className="title">{props.title}</h3>
      {props.children}
      <div className="containerButtons">
        {
          props.buttons.map((button, index) => <Fragment key={index}>{button}</Fragment>)
        }
      </div>
    </div>
  );
};
