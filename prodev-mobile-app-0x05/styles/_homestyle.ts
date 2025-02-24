import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#009688",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  propertyList: {
    marginTop: 10,
  },
});
