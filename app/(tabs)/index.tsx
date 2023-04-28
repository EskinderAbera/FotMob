import { StyleSheet } from "react-native";
import SwipeableList from "../../components/SwipeableList";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  const data = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "December",
    "January",
  ];
  return (
    <View style={styles.container}>
      {/* <SwipeableList data={data} /> */}
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
