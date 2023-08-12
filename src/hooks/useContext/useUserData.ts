import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext';

const useUserData = () => useContext(UserDataContext);

export default useUserData;