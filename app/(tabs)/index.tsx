import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import SwipeableList from "../../components/MatchesComponent/SwipeableList";
import { Text, View } from "../../components/Themed";
import NoFollowMatch from "../../components/MatchesComponent/NoFollowMatch";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import matches from "../../assets/data/matches.json";
import { Image } from "expo-image";

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

  const match = matches[0];

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
        <Text style={styles.txt}>{hide ? "Hide all" : "Show all"}</Text>
        <AntDesign
          name={hide ? "up" : "down"}
          size={15}
          color={Colors[colorScheme ?? "light"].text}
          style={styles.icon}
        />
      </View>
      <View
        style={{ margin: 10, marginVertical: 20 }}
        darkColor="rgba(255,255,255,0.08)"
      >
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Image source={{ uri: match.icon }} style={styles.leagueIcon} />
          <Text>{`${match.country} - ${match.leagueName}`}</Text>
          <AntDesign
            name="up"
            size={15}
            color="gray"
            style={{ marginLeft: "auto", alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hideContainer: {
    alignSelf: "center",
    marginTop: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  leagueIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    // borderRadius: 120,
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
