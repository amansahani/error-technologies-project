import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from './BottomNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthStatus} from '../utils/AuthAPI';
import {setIsAuthenticated} from '../utils/store/AuthSlice';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state): any => {
    return state;
  });

  const fetchAuthentication = async () => {
    try {
      const status = await getAuthStatus();
      dispatch(setIsAuthenticated(status === 'valid' ? true : false));
      if (status === 'valid') {
        navigation.navigate('Home' as never);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setTimeout(fetchAuthentication, 1);
    console.log(`useeffect ${isAuthenticated}`);
  }, []);

  return (
    <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
