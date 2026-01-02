import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // İkonlar için
import styles from "./styles";
import { colors } from "../../theme/colors";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Üst Kısım: Avatar ve İsim */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>M</Text>
        </View>
        <Text style={styles.name}>Misafir Kullanıcı</Text>
        <Text style={styles.badge}>Henüz Çaylak</Text>
      </View>

      {/* İstatistikler */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Test Çözüldü</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>%0</Text>
          <Text style={styles.statLabel}>Ort. Toksiklik</Text>
        </View>
      </View>

      {/* Menü Listesi */}
      <View style={styles.menuContainer}>
        <MenuItem icon="settings-outline" title="Ayarlar" />
        <MenuItem icon="share-social-outline" title="Uygulamayı Paylaş" />
        <MenuItem icon="star-outline" title="Bizi Değerlendir" />
        <MenuItem icon="log-out-outline" title="Çıkış Yap" color="#F44336" />
      </View>
    </ScrollView>
  );
};

// Menü elemanı için küçük bir yardımcı bileşen (Local Component)
const MenuItem = ({ icon, title, color }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={24} color={color || colors.primary} />
    <Text style={[styles.menuText, { color: color || colors.text }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default ProfileScreen;
