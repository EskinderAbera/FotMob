import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import SwipeableList from "../../components/MatchesComponent/SwipeableList";
import { Text, View } from "../../components/Themed";
import NoFollowMatch from "../../components/MatchesComponent/NoFollowMatch";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function TabOneScreen() {
  const data = [
    "Wed 26 Apr",
    "Yesterday",
    "Today",
    "Tomorrow",
    "Sun 30 Apr",
    "Saturday",
    "Sunday",
    "January",
    "February",
    "December",
  ];

  const colorScheme = useColorScheme();
  const [hide, onHide] = React.useState(false);

  return (
    <View
      darkColor="#000"
      style={styles.container}
      lightColor="rgba(246,246,246,255)"
    >
      <SwipeableList data={data} />
      <NoFollowMatch />
      <View
        style={styles.hideContainer}
        darkColor="rgba(255,255,255,0.08)"
        lightColor="rgba(236,236,236,255)"
        onTouchEnd={() => onHide(!hide)}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {hide ? "Hide all" : "Show all"}
        </Text>
        <AntDesign
          name={hide ? "up" : "down"}
          size={15}
          color={Colors[colorScheme ?? "light"].text}
          style={{ marginLeft: 10, alignSelf: "flex-end" }}
          // onPress={() => onHide(!hide)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hideContainer: {
    // width: "100%",
    alignSelf: "center",
    // width: 120,
    marginVertical: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 10,
    // padding: 20,
    // height: 200,
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
});
