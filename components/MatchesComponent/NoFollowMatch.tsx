import { StyleSheet } from "react-native";
import React from "react";
import { View, Text } from "../Themed";

const NoFollowMatch = () => {
  return (
    <View style={styles.noFollow} lightColor="rgba(246,246,246,255)">
      <Text style={styles.Followtxt}>Following</Text>
      <Text style={styles.desc}>No favorites playing today</Text>
    </View>
  );
};

export default NoFollowMatch;

const styles = StyleSheet.create({
  noFollow: {
    width: "100%",
    alignItems: "center",
    marginVertical: 15,
  },
  Followtxt: {
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 15,
  },
  desc: {
    color: "gray",
    fontWeight: "700",
  },
});
