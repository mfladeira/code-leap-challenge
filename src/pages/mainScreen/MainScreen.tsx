import { Card } from "../../components/card/Card";
import "./MainScreen.scss";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Post } from "../../components/post/Post";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import EditIcon from "../../assets/EditIcon.svg";
import { Link } from "react-router-dom";

export const MainScreen = () => {
  return (
    <div className="MainScreen">
      <div className="mainScreenContainer">
        <header className="header">
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
              <Input placeholder="Hello world" label="Title" />
              <Input isTextArea placeholder="Content here" label="Content" />
            </Card>
          </article>
          <article>
            <Post
              title="My First Post at CodeLeap Network!"
              width={752}
              author="Victor"
              date={"2023-04-29T22:30:31.567072Z"}
              buttons={[
                <img src={DeleteIcon} width={18} height={22.5} />,
                <img
                  src={EditIcon}
                  width={30}
                  height={26}
                  style={{ marginLeft: 34 }}
                />,
              ]}
              content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
              elit. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
              mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
              lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
              feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
              lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
            />
          </article>
          {/* <article>
            <Post title="My First Post at CodeLeap Network!" width={752}>
              1
            </Post>
          </article> */}
        </main>
      </div>

      {/* <Card
        isModal
        width={660}
        title="Are you sure you want to delete this item?"
        buttons={[
          <Link
            to="/main-screen"
            children={<Button text="Cancel" theme="OutLine" disabled={false} />}
          />,
          <Link
            to="/main-screen"
            children={<Button text="Delete" theme="Danger" disabled={false} />}
          />,
        ]}
      /> */}
      <Card
        isModal
        width={660}
        title="Edit item"
        buttons={[
          <Button text="Cancel" theme="OutLine" disabled={false} />,
          <Button text="Save" theme="Success" disabled={false} />,
        ]}
      >
        <Input placeholder="Hello world" label="Title" />
        <Input isTextArea placeholder="Content here" label="Content" />
      </Card>
    </div>
  );
};
