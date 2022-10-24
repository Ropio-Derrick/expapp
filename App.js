import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [name, setName] = useState("mash");

  const onClickHandler = () => {
    setName("Programming with mash");
    setSession({ number: 7, title: "style" });
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <Text style={styles.text}> {name}</Text>

      <Button title="Update State" onPress={onClickHandler}>
        {" "}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "50%",
    backgroundColor: "#de8727",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "10",
    borderColor: "red",
  },
  text: {
    textAlign: "center",
    color: "white",
    padding: 10,
    margin: 10,
    backgroundColor: "red",
  },
});

export default App;
