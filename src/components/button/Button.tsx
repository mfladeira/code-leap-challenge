import "./Button.scss";

interface IButton {
  text: string;
  theme: "Filled" | "OutLine" | "Danger" | "Success";
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button = (props: IButton) => {
  return (
    <button
      className={`Button ${props.theme}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
