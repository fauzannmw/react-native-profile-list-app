import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import Listbox from "./components/Listbox";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>User</Text>
      </View>
      <Listbox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  titlebox: {
    backgroundColor: "#FF6767",
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 25,
    color: "white",
  },
});
