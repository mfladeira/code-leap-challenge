import "./Post.scss";
import { Fragment } from "react";
import formatDistance from "date-fns/formatDistance";

interface IPost {
  width: number;
  title: string;
  buttons?: React.ReactNode[];
  author: string;
  date: string;
  content: string;
}

export const Post = (props: IPost) => {
  return (
    <div className="Post" style={{ width: props.width }}>
      <header className="headerPost">
        <h3 className="title">{props.title}</h3>
        <div className="buttons">
          {props.buttons &&
            props.buttons?.length !== 0 &&
            props.buttons.map((button, index) => (
              <Fragment key={index}>{button}</Fragment>
            ))}
        </div>
      </header>
      <main>
        <div className="infoUser">
          <span>@{props.author}</span>
          <span>
            {formatDistance(new Date(props.date), new Date(), {
              addSuffix: true,
            })}
          </span>
        </div>
        <p className="content">{props.content}</p>
      </main>
    </div>
  );
};
