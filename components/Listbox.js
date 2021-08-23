import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

// let posts = [];

// for (let i = 0; i < 15; i++) {
//   posts.push({
//     title: `Title ${i}`,
//     description: `Description for title ${i}`,
//   });
// }

const Listbox = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <ScrollView style={styles.scroll}>
      {users.map((user, idx) => (
        <View style={styles.innerBox} key={idx}>
          <View style={styles.box1}>
            <Image
              style={styles.logo}
              source={{ uri: user.picture.thumbnail }}
            />
          </View>
          <View style={styles.box2}>
            <Text style={styles.innerBoxTitle}>
              {user.name.title} {user.name.first} {user.name.last}
            </Text>
            <Text style={styles.innerBoxTitle}>
              {user.location.state}, {user.location.country}
            </Text>
          </View>
        </View>
      ))}

      {/* {posts.map((post, idx) => (
          <View style={styles.innerBox} key={idx}>
            <View style={styles.box1}>
              <Image
                style={styles.logo}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
                }}
              />
            </View>
            <View style={styles.box2}>
              <Text style={styles.innerBoxTitle}>{post.title}</Text>
              <Text style={styles.innerBoxTitle}>{post.description}</Text>
            </View>
          </View>
        ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#FCD8D4",
    paddingHorizontal: 10,
  },
  innerBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0A81AB",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  box1: {
    flex: 2,
  },
  box2: {
    flex: 6,
  },
  innerBoxTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  logo: {
    height: 50,
    width: 50,
  },
  innerBoxDescription: {},
});

export default Listbox;
