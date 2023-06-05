import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
  Text,
} from "react-native";
import ListItem from "../componenets/Listitem";

const UpcomingWeather = ({ weatherdata }) => {
  // console.log(weatherData);
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require("../../assets/thunder.jpg")}
      >
        <Text style={styles.text}>Upcoming Weathers</Text>
        <FlatList
          data={weatherdata}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#ffffff",
    paddingVertical: 30,
    textAlign: "center",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
