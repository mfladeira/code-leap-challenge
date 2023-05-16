export const login = (user: string) => ({
  type: "login",
  user: user,
});

export const changeTitle = (title: string) => ({
  type: "change-title",
  title: title,
});

export const changeContent = (content: string) => ({
  type: "change-content",
  content: content,
});
