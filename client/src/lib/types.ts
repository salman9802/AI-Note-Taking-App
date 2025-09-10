export type Note = {
  id: string;
  title: string;
  content: string;
  noteTags: NoteTag[];
};

export type NoteTag = {
  id: string;
  name: string;
};

export type User = {
  id: string;
  email: string;
  accessToken: string;
};

export type RegisterResponsePayload = {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
};

export type LoginResponsePayload = {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
};
