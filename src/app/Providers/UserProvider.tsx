import React, {useState} from "react";


interface UserDto {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
}

interface IUserProvider {
    user: UserDto;
    login: (userDto: UserDto) => void;
    logout: () => void;
    isLogin: () => {};
    getUser: () => {};
}

let UnauthorizedUser: UserDto = {id: 0, firstName: '', lastName: '', userName: ''}


export const UserContext = React.createContext<IUserProvider>({
    user: UnauthorizedUser,
    login: () => {
    },
    logout: () => {
    },
    getUser: () => {
        return UnauthorizedUser
    },
    isLogin: () => {
        return false
    }
});


const UserProvider: React.FC = ({children}) => {

    const [User, setUser] = useState<UserDto>(UnauthorizedUser);

    return <UserContext.Provider value={{
        user: User,
        login: (userDto: UserDto) => {
            setUser(userDto)
        },
        logout: () => {
            setUser(UnauthorizedUser)
        },
        getUser: () => {
            return User;
        },
        isLogin: () => {
            if (User.id === 0) return false;
            return true;
        },
    }}> {children}</UserContext.Provider>

}

export default UserProvider;