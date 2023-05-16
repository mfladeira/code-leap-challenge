import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Post } from "../../components/post/Post";
import { changeContent, changeTitle } from "../../actions";
import { api } from "../../services/api";
import "./MainScreen.scss";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import EditIcon from "../../assets/EditIcon.svg";
import { Link } from "react-router-dom";
import { Spinner } from "../../components/spinner/Spinner";

interface IPost {
  content: string;
  created_datetime: string;
  id: number;
  title: string;
  username: string;
}

export const MainScreen = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const { title, content } = useSelector(
    (state: any) => state.mainScreenReducer
  );
  const user = useSelector((state: any) => state.loginReducer.user);
  const [selectedPost, setSelectedPost] = useState<IPost | undefined>();
  const [status, setStatus] = useState<"Editing" | "Deleting" | "">("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = async () => {
    try {
      await api.post("/", {
        content,
        title: title,
        created_datetime: new Date(),
        username: user,
      });

      dispatch(changeTitle(""));
      dispatch(changeContent(""));

      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async () => {
    try {
      await api.patch(`/${selectedPost?.id}/`, {
        content: selectedPost?.content,
        title: selectedPost?.title,
        created_datetime: new Date(),
        username: user,
      });

      setStatus("");
      setSelectedPost(undefined);

      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    try {
      setIsLoading(true);

      const response = await api.get("/");
      setPosts(response.data.results);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      await api.delete(`/${selectedPost?.id}/`);
      setStatus("");
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

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
                <Button
                  text="Create"
                  theme="Filled"
                  disabled={title === "" || content === ""}
                  onClick={() => createPost()}
                />,
              ]}
            >
              <Input
                placeholder="Hello world"
                label="Title"
                onChange={(e) => dispatch(changeTitle(e.target.value))}
                value={title}
              />
              <Input
                isTextArea
                placeholder="Content here"
                label="Content"
                onChange={(e) => dispatch(changeContent(e.target.value))}
                value={content}
              />
            </Card>
          </article>
          {isLoading ? (
            <div className="containerSpinner">
              <Spinner />
            </div>
          ) : (
            <>
              {posts.map((post) => {
                return (
                  <article key={post.id}>
                    <Post
                      title={post.title}
                      width={752}
                      author={post.username}
                      date={post.created_datetime}
                      buttons={
                        post.username == user
                          ? [
                              <img
                                src={DeleteIcon}
                                width={18}
                                height={22.5}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setSelectedPost(post);
                                  setStatus("Deleting");
                                }}
                              />,
                              <img
                                src={EditIcon}
                                width={30}
                                height={26}
                                style={{ marginLeft: 34, cursor: "pointer" }}
                                onClick={() => {
                                  setSelectedPost(post);
                                  setStatus("Editing");
                                }}
                              />,
                            ]
                          : []
                      }
                      content={post.content}
                    />
                  </article>
                );
              })}
            </>
          )}
        </main>
      </div>

      {status === "Deleting" && (
        <Card
          isModal
          width={660}
          title="Are you sure you want to delete this item?"
          buttons={[
            <Button
              text="Cancel"
              theme="OutLine"
              disabled={false}
              onClick={() => setStatus("")}
            />,
            <Link
              to="/main-screen"
              children={
                <Button
                  text="Delete"
                  theme="Danger"
                  disabled={false}
                  onClick={() => deletePost()}
                />
              }
            />,
          ]}
        />
      )}

      {status === "Editing" && (
        <Card
          isModal
          width={660}
          title="Edit item"
          buttons={[
            <Button
              text="Cancel"
              theme="OutLine"
              disabled={false}
              onClick={() => setStatus("")}
            />,
            <Button
              text="Save"
              theme="Success"
              disabled={false}
              onClick={() => editPost()}
            />,
          ]}
        >
          <Input
            placeholder="Hello world"
            label="Title"
            value={selectedPost?.title!}
            onChange={(e) => {
              setSelectedPost({ ...selectedPost!, title: e.target.value });
            }}
          />
          <Input
            isTextArea
            placeholder="Content here"
            label="Content"
            value={selectedPost?.content!}
            onChange={(e) => {
              setSelectedPost({ ...selectedPost!, content: e.target.value });
            }}
          />
        </Card>
      )}
    </div>
  );
};
