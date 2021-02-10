import API from "../API";
import UserDto from "../API/DTOs/UserDto";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface IUserProvider {
  user: UserDto;
  isLogin: boolean;
  Logout: () => void;
  Login: (userDto: UserDto) => void;
}

let UnauthorizedUser: UserDto = {
  id: 0,
  code: "",
  email: "",
  avatar: "",
  last_name: "",
  first_name: "",
  date_joined: new Date(),
};

export const UserContext = React.createContext<IUserProvider>({
  isLogin: false,
  user: UnauthorizedUser,
  Login: () => undefined,
  Logout: () => undefined,
});

const UserProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const isLogin = !!localStorage.getItem("token");
  const cachedUser = localStorage.getItem("user");
  const [User, setUser] = useState<UserDto>(
    cachedUser ? JSON.parse(cachedUser) : UnauthorizedUser
  );

  useEffect(() => {
    if (User.id) {
      localStorage.setItem("user", JSON.stringify(User));
    }
  }, [User.id]);

  useEffect(() => {
    if (isLogin) {
      API.Users.GetProfile({}).then((response) => {
        setUser(response);
      });
    } else {
      setUser(UnauthorizedUser);
    }
  }, [isLogin]);

  return (
    <UserContext.Provider
      value={{
        user: User,
        isLogin: isLogin,
        Logout: () => {
          setUser(UnauthorizedUser);
          localStorage.removeItem("token");
          history.push("/");
        },
        Login: (userDto: UserDto) => setUser(userDto),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
