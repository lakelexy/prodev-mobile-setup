import { View, Text, ImageBackground } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropertyListingProps } from "@/interfaces";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "@/styles/_propertyCardStyle";

const PropertyListingCard: React.FC<PropertyListingProps> = ({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite,
}) => {
  return (
    <ImageBackground
      source={require("@/assets/images/sample-image.png")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.favoriteGroup}>
          {favorite ? (
            <FontAwesome name="heart" size={24} color="#E50000" />
          ) : (
            <EvilIcons name="heart" size={32} color="white" />
          )}
        </View>

        <View style={styles.group}>
          <View style={styles.rateGroup}>
            <MaterialIcons name="star-rate" size={40} color="#FAC02B" />
            <Text style={styles.rateText}>{rate}</Text>
          </View>
          <Text style={styles.cardLargeText}>{propertyName}</Text>
          <Text style={styles.cardSmallText}>
            {location.street}, {location.city}, {location.country}
          </Text>
          <Text style={styles.priceText}>
            {currency}
            {amount}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PropertyListingCard;
