import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const MansionScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Forward Arrow Button */}
      <TouchableOpacity
        onPress={() => router.arrowright()}
        style={{ marginBottom: 10 }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Mansion Listings</Text>
      {/* Mansion listing content goes here */}
    </View>
  );
};

export default MansionScreen;
