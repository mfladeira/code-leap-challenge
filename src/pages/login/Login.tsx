import { Link, Navigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions";
import "./Login.scss";

export const Login = () => {
  const dispatch   = useDispatch();
  const user       = useSelector((state: any) => state.loginReducer.user);
  const isLoggedIn = localStorage.getItem("user");

  if (isLoggedIn) {
    return <Navigate to="/main-screen" />;
  }

  return (
    <div className="Login">
      <Card
        width={500}
        title="Welcome to CodeLeap network!"
        buttons={[
          <Link
            to="/main-screen"
            children={
              <Button
                text="ENTER"
                theme="Filled"
                disabled={!user}
                onClick={() => localStorage.setItem("user", user)}
              />
            }
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
