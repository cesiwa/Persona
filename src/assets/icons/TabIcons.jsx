import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export const HomeIcon = ({ focused }) => (
  <Ionicons
    name="home"
    size={24}
    color={focused ? colors.primary : colors.inactive}
  />
);

export const QuizIcon = ({ focused }) => (
  <MaterialCommunityIcons
    name="clipboard-text-outline"
    size={28}
    color={focused ? "#FFF" : colors.inactive}
  />
);

export const ProfileIcon = ({ focused }) => (
  <Ionicons
    name="person"
    size={24}
    color={focused ? colors.primary : colors.inactive}
  />
);
