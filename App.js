import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import CustomDrawer from "./navigation/CustomDrawer";
import {
  MainLayout,
} from "./screens";

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

const Stack = createStackNavigator();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {

  const [loaded] = useFonts({
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={CustomDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App