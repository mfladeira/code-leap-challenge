import "./Card.scss";

interface ICard {
  children?: React.ReactNode;
  width: number;
  title: string;
  buttons: React.ReactNode[];
  isModal?: boolean;
}

export const Card = (props: ICard) => {
  return (
    <div className={props.isModal ? "CardModal" : ""}>
      <div className="Card" style={{ width: props.width }}>
        <h3 className="title">{props.title}</h3>
        {props.children && props.children}
        <div className="containerButtons">
          {props.buttons.map((button, index) => (
            <div key={index} style={{ marginLeft: 16 }}>
              {button}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
