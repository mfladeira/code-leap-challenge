import "./Input.scss";

interface IInput {
  placeholder: string;
  label: string;
  isTextArea?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
            rows={4}
            cols={50}
            className="textArea"
            placeholder={props.placeholder}
          />
        </>
      ) : (
        <>
          <label htmlFor="input" className="label">
            {props.label}
          </label>
          <input
            id="input"
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
