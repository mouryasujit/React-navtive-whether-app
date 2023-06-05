import React from "react";
import Current from "../Screens/Currentwhether.js";
import Upcomingwhether from "../Screens/Upcomingwhether.js";
import City from "../Screens/City.js";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  // console.log(weather.list[0]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },

        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Current") {
            iconName = "droplet";
          } else if (route.name === "Upcoming") {
            iconName = "clock";
          } else if (route.name === "City") {
            iconName = "home";
          }

          return (
            <Feather
              name={iconName}
              size={25}
              color={focused ? "tomato" : "white"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Current">
        {() => <Current weatherdata={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen name="Upcoming">
        {() => <Upcomingwhether weatherdata={weather.list} />}
      </Tab.Screen>
      <Tab.Screen name="City">
        {() => <City weatherdata={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
