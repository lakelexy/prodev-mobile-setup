import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { PropertListing } from "@/interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View>
      {listings.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
