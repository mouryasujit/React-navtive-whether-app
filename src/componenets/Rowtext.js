import React from "react";
import { View, Text } from "react-native";

const Rowtext = (props) => {
  const { messageone, messagetwo, containers, inside1, inside2 } = props;
  return (
    <View style={containers}>
      <Text style={inside1}>{messageone}</Text>
      <Text style={inside2}>{messagetwo}</Text>
    </View>
  );
};

export default Rowtext;
