import React, { useState } from "react";

interface UserDto {
  id: number;
  userName: string;
  lastName: string;
  firstName: string;
}

interface IUserProvider {
  logout: () => void;
  isLogin: () => boolean;
  getUser: () => UserDto;
  login: (userDto: UserDto) => void;
}

let UnauthorizedUser: UserDto = {
  id: 0,
  lastName: "",
  userName: "",
  firstName: "",
};

export const UserContext = React.createContext<IUserProvider>({
  isLogin: () => false,
  login: () => undefined,
  logout: () => undefined,
  getUser: () => UnauthorizedUser,
});

const UserProvider: React.FC = ({ children }) => {
  const [User, setUser] = useState<UserDto>(UnauthorizedUser);

  return (
    <UserContext.Provider
      value={{
        getUser: () => User,
        isLogin: () => User.id !== 0,
        logout: () => setUser(UnauthorizedUser),
        login: (userDto: UserDto) => setUser(userDto),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
