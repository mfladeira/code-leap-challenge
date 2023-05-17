import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions";
import "./Login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.loginReducer.user);

  return (
    <div className="Login">
      <Card
        width={500}
        title="Welcome to CodeLeap network!"
        buttons={[
          <Link
            to="/main-screen"
            children={<Button text="ENTER" theme="Filled" disabled={!user} />}
          />,
        ]}
      >
        <Input
          id="InputLogin"
          placeholder="John doe"
          label="Please enter your username"
          value={user}
          onChange={(e) => dispatch(login(e.target.value))}
        />
      </Card>
    </div>
  );
};
