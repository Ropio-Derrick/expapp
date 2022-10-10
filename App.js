import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [name, setName] = useState("mash");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [current, setCurrent] = useState(true);

  const onClickHandler = () => {
    setName("Programming with mash");
    setSession({ number: 7, title: "style" });
    setCurrent(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {name}</Text>
      <Text style={styles.text}>
        This is session Number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {" "}
        {current ? "current session" : "next session"}
      </Text>

      <Button title="Update State" onPress={onClickHandler}>
        {" "}
      </Button>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
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
