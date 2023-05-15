import "./Button.scss";

interface IButton {
  text: string;
  theme: "Filled" | "OutLine" | "Danger" | "Success";
  disabled: boolean;
}
export const Button = (props: IButton) => {
  return (
    <button
      className={`Button ${props.disabled ? "Disabled" : props.theme}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
