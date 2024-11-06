import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobs.style";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-web";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { SIZES } from "../../../constants";

const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading? <ActivityIndicator size='large'/>: error? (<Text>something went wrong</Text>): 
          <FlatList
            data={[1,2,3,4]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        }
      </View>
    </View>
  );
};

export default Popularjobs;
