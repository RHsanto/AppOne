import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import LogIn from './src/screens/logIn';
const Stack = createNativeStackNavigator();
 function App() {
 
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}


export default App;