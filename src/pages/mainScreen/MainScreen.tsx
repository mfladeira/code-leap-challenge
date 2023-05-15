import { Card } from "../../components/card/Card";
import "./MainScreen.scss";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

export const MainScreen = () => {
  return (
    <div className="MainScreen">
      <div className="mainScreenContainer">
        <header>
          <p>CodeLeap Network</p>
        </header>
        <main>
          <article>
            <Card
              width={752}
              title="What's on your mind?"
              buttons={[
                <Button text="Create" theme="Filled" disabled={false} />,
              ]}
            >
              <Input
                placeholder="Hello world"
                label="Title"
              />
              <Input
                isTextArea
                placeholder="Content here"
                label="Content"
              />
            </Card>
          </article>
        </main>
      </div>
    </div>
  );
};
