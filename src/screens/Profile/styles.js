import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingTop: 60, // Üstten biraz boşluk
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E1BEE7", // Açık mor
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.primary,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  badge: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    backgroundColor: "#F0F0F0",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
    overflow: "hidden",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  menuText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 15,
    fontWeight: "500",
  },
});
