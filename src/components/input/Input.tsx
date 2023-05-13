import "./Input.scss";

interface IInput {
  placeholder: string;
  label: string;
}

export const Input = (props: IInput) => {
  return (
    <div className="InputContainer">
      <label htmlFor="input" className="label">{props.label}</label>
      <input id="input" type="text" className="input" placeholder={props.placeholder} />
    </div>
  );
};
