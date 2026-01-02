import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../theme/colors";
import { HomeIcon, QuizIcon, ProfileIcon } from "../../assets/icons/TabIcons";

const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Ortadaki buton (Quiz) için özel tasarım kontrolü
          const isMiddleButton = index === 1;

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={isMiddleButton ? styles.middleButton : styles.tabButton}
              activeOpacity={0.8}
            >
              {index === 0 && <HomeIcon focused={isFocused} />}
              {index === 1 && <QuizIcon focused={isFocused} />}
              {index === 2 && <ProfileIcon focused={isFocused} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30, // Aşağıdan boşluk
    width: width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.surface,
    width: "85%", // Ekranın %85'i kadar genişlik (Kapsül görünümü)
    height: 70,
    borderRadius: 35, // Tam yuvarlak köşeler (Kapsül)
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Android gölgesi
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleButton: {
    width: 60,
    height: 60,
    borderRadius: 20, // Hafif karemsi yuvarlak (Görseldeki gibi)
    backgroundColor: "#ECE6FA", // Açık lila arka plan
    alignItems: "center",
    justifyContent: "center",
    // Ortadaki mor ikon kutusu
    borderWidth: 0,
  },
  // İkonun kendisinin mor kutu içinde olması mantığı ikon component içinde veya burada ekstra bir View ile de çözülebilir.
  // Basitlik için ikon rengini ayarladık.
});

export default CustomTabBar;
