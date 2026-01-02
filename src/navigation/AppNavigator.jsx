import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Ekranlar
import HomeScreen from "../screens/Home";
import QuizScreen from "../screens/Quiz";
import ResultScreen from "../screens/Result";
import ProfileScreen from "../screens/Profile";

// Footer Bileşeni
import CustomTabBar from "./ui/CustomTabBar";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. Alt Menü (Footer'ın göründüğü yer)
function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 2. Ana Yığın (Tüm uygulama)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Ana uygulama TabNavigator içinde çalışır */}
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        {/* Result ekranı footer'ın dışında, tam ekran açılır */}
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
