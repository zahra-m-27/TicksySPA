import React, { useState } from "react";

interface UserDto {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
}

interface IUserProvider {
  login: (userDto: UserDto) => void;
  logout: () => void;
  isLogin: () => boolean;
  getUser: () => UserDto;
}

let UnauthorizedUser: UserDto = {
  id: 0,
  firstName: "",
  lastName: "",
  userName: "",
};

export const UserContext = React.createContext<IUserProvider>({
  login: () => undefined,
  logout: () => undefined,
  getUser: () => {
    return UnauthorizedUser;
  },
  isLogin: () => {
    return false;
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [User, setUser] = useState<UserDto>(UnauthorizedUser);

  return (
    <UserContext.Provider
      value={{
        login: (userDto: UserDto) => {
          setUser(userDto);
        },
        logout: () => {
          setUser(UnauthorizedUser);
        },
        getUser: () => {
          return User;
        },
        isLogin: () => User.id !== 0,
      }}
    >
      {" "}
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
