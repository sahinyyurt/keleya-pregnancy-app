import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  activeUser?: Partial<User>;
  users: User[];
  loginError: boolean;
};

const updateUserList = (users: User[], user: User, index: number) => [
  ...users.slice(0, index),
  { ...user },
  ...users.slice(index + 1),
];

const slice = createSlice({
  name: 'user',
  initialState: {
    activeUser: undefined,
    users: [],
  } as unknown as UserState,
  reducers: {
    registerUser: (state, { payload: user }: UserPayload) => {
      if (state) {
        state.users = [user as User, ...state.users];
        state.activeUser = {
          email: user.email,
          name: user.name,
        };
      }
    },
    loginUser: (state, { payload: { email, password } }: UserPayload) => {
      const users = state.users;
      const foundUser = users.filter(
        (x: User) => x.email === email && x.password === password,
      )[0];
      if (foundUser) {
        state.activeUser = foundUser;
        state.loginError = false;
      } else {
        state.loginError = true;
      }
    },
    logoutUser: state => {
      if (state) {
        state.activeUser = undefined;
      }
    },
    updateUserName: (state, { payload: user }: UserPayload) => {
      const users = state.users;
      const foundUser = users.findIndex((x: User) => x.email === user.email);
      if (foundUser > -1) {
        state.activeUser = {
          ...state.users[foundUser],
          name: user.name as string,
        };
        state.users = updateUserList(
          state.users,
          state.activeUser as User,
          foundUser,
        ) as User[];
      }
    },
    updateUserDue: (state, { payload: user }: UserPayload) => {
      const users = state.users;
      const foundUser = users.findIndex((x: User) => x.email === user.email);
      if (foundUser > -1) {
        state.activeUser = {
          ...state.users[foundUser],
          due: user.due as string,
        };
        state.users = updateUserList(
          state.users,
          state.activeUser as User,
          foundUser,
        ) as User[];
      }
    },
    updateUserPeriod: (state, { payload: user }: UserPayload) => {
      const users = state.users;
      const foundUser = users.findIndex((x: User) => x.email === user.email);
      if (foundUser > -1) {
        state.activeUser = {
          ...state.users[foundUser],
          period: user.period as string,
        };
        state.users = updateUserList(
          state.users,
          state.activeUser as User,
          foundUser,
        ) as User[];
      }
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
  updateUserName,
  updateUserDue,
  updateUserPeriod,
} = slice.actions;

export default slice.reducer;

export type User = {
  name: string;
  email: string;
  password: string;
  due: string;
  period: string;
  terms: boolean;
  policy: boolean;
};

type UserPayload = {
  payload: Partial<User>;
};
