import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,

    // Shadows for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Shadows for Android
    elevation: 5,

    // Shadows for Web
    ...(Platform.OS === "web"
      ? {
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }
      : {}),
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  propertyInfo: {
    marginTop: 10,
  },
  propertyName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  propertyLocation: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#009688",
    marginTop: 5,
  },
});
