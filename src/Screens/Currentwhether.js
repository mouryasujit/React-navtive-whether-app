import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Rowtext from "../componenets/Rowtext";
import { weatherType } from "../Utilities/Whethertype.js";

const Current = ({ weatherdata }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherdata;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView
      style={[styles.wrapper, weatherType[weatherCondition].backgroundColor]}
    >
      <ImageBackground
        source={require("../../assets/CTa.gif")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Feather
            name={weatherType[weatherCondition].icon}
            size={140}
            color={weatherType[weatherCondition].backgroundColor}
            style={styles.fontW}
          />
          <Text style={styles.temp}>{temp} °C</Text>
          <Text style={styles.feels}>Feels Like {feels_like}</Text>
          <Rowtext
            messageone={`High: ${Math.round(temp_max)}`}
            messagetwo={`Low: ${Math.round(temp_min)}`}
            containers={styles.tempcontainer}
            inside1={styles.tempmax}
            inside2={styles.tempmin}
          />
        </View>
        <Rowtext
          messageone={weatherType[weatherCondition].mess}
          messagetwo={weatherType[weatherCondition].message}
          containers={styles.container2}
          inside1={styles.sunny}
          inside2={styles.perfect}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // paddingVertical: 30,
  },

  tempcontainer: {
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  temp: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  tempmax: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  tempmin: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    gap: 5,
    paddingVertical: 60,
  },

  container2: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  sunny: {
    fontSize: 40,
    fontWeight: "600",
    color: "white",
  },
  perfect: {
    fontSize: 30,
    textAlign: "center",
    color: "yellow",
  },
  fon: {
    fontSize: 42,
  },
  feels: {
    fontSize: 25,
    color: "yellow",
    fontWeight: "bold",
  },
  fontW: {
    fontWeight: 600,
    elevation: 50,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Current;
