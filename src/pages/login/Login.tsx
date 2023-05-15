import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import "./Login.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions";

export const Login = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.loginReducer.user);

  return (
    <div className="Login">
      <h2>{counter}</h2>
      <Card
        width={500}
        title="Welcome to CodeLeap network!"
        buttons={[
          <Link
            to="/main-screen"
            children={<Button text="ENTER" theme="Filled" disabled={false} />}
          />,
        ]}
      >
        <Input
          placeholder="John doe"
          label="Please enter your username"
          onChange={(e) => dispatch(login(e.target.value))}
        />
      </Card>
    </div>
  );
};
