import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from "./Pages/LandingPage";
import HomeScreen from "./Pages/HomeScreenBase";
import Shop from "./Pages/Shop.js";
import News from "./Pages/News.js";
import Community from "./Pages/Community.js";
import RegisterPage from "./Pages/RegisterPage.js";
import LoginPage from "./Pages/LoginPage.js";
import ForgotPassword from "./Pages/ForgotPassword.js";
import PostComments from "./Pages/PostComments.js";
import NewComment from "./Pages/NewComment.js";
import ShopCategoryPage from './Pages/ShopCategoryPage';
import ProfilePage from './Pages/ProfilePage';
import SchedulePage from './Pages/SchedulePage';


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
          name="Blog"
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
        <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
        />       
        <Stack.Screen
          name="Comments"
          component={PostComments}
        />
        <Stack.Screen
          name="NewComment"
          component={NewComment}
        />
        <Stack.Screen
          name="ShopCategory"
          component={ShopCategoryPage}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
        />
        <Stack.Screen
          name="Schedule"
          component={SchedulePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};


export default App;
