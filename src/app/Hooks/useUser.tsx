import React from 'react';
import {UserContext} from '../Providers/UserProvider';

export default function useUser() {
  return React.useContext(UserContext);
}
