import React from 'react';
import LandingPage from "./Pages/LandingPage";
import HomeScreen from "./Pages/HomeScreen";
import Shop from "./Pages/Shop.js";
import News from "./Pages/News.js";
import Community from "./Pages/Community.js";
import RegisterPage from "./Pages/RegisterPage.js";
import LoginPage from "./Pages/LoginPage.js";
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
          }}initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingPage}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
                    <Stack.Screen
            name="News"
            component={News}
          />
          <Stack.Screen
            name="Community"
            component={Community}
          />
          <Stack.Screen
            name="Shop"
            component={Shop}
          />
          <Stack.Screen
            name="Register"
            component={RegisterPage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;
