import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chap2ScaleBackground from "./Chap2ScaleBackground/App";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Chap2ScaleBackground />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
