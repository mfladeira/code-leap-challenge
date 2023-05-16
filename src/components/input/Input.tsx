import "./Input.scss";

interface IInput {
  placeholder: string;
  label: string;
  isTextArea?: boolean;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
}

export const Input = (props: IInput) => {
  return (
    <div className="InputContainer">
      {props.isTextArea ? (
        <>
          <label htmlFor="textArea" className="label">
            {props.label}
          </label>
          <textarea
            id="textArea"
            value={props.value}
            rows={4}
            cols={50}
            className="textArea"
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </>
      ) : (
        <>
          <label htmlFor="input" className="label">
            {props.label}
          </label>
          <input
            id="input"
            value={props.value}
            type="text"
            className="input"
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </>
      )}
    </div>
  );
};
