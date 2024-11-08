import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import { COLORS, images,icons, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
import Welcome from "../components/home/welcome/Welcome";

const Home = () => {
    const router = useRouter()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
            <ScreenHeaderBtn iconUrl = {icons.menu} dimension="60%" />
        ),
        headerRight: () => (
            <ScreenHeaderBtn iconUrl = {images.profile} dimension="100%" />
        ),
        headerTitle: ""
      }}/>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
         style={{
            flex: 1,
            padding: SIZES.medium
         }}
        >
            <Welcome/>
            <Popularjobs/>
            <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
