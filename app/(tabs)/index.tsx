import { StyleSheet, FlatList } from "react-native";
import SwipeableList from "../../components/MatchesComponent/SwipeableList";
import { Text, View } from "../../components/Themed";
import NoFollowMatch from "../../components/MatchesComponent/NoFollowMatch";

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

  return (
    <View darkColor="#000" style={styles.container}>
      <SwipeableList data={data} />
      <NoFollowMatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
