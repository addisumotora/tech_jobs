import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-web";
import { TouchableOpacity } from "react-native";
import { icons, SIZES } from "../../../constants";

const jobTypes = ['Full-time', 'Part-time', 'Contractor']
const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-time')
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userNames}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder="what are you looking for?"/>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle = {{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
