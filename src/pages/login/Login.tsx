import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { Input } from "../../components/input/Input";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="Login">
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
        <Input placeholder="John doe" label="Please enter your username" />
      </Card>
    </div>
  );
};
