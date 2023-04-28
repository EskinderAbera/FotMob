import React, { useState } from "react";
import { View, Text } from "../Themed";
import { FlatList, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  data: string[];
}

const SwipeableList: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const colorScheme = useColorScheme();

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View
      darkColor="rgba(255,255,255,0)"
      style={[
        styles.txtContainer,
        {
          borderBottomColor:
            activeIndex === index ? Colors[colorScheme ?? "light"].tint : "",
          borderBottomWidth: activeIndex === index ? 3 : 0,
        },
      ]}
    >
      <Text
        style={index === activeIndex ? styles.activeText : styles.inactiveText}
        onPress={() => setActiveIndex(index)}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <View darkColor="rgba(255,255,255,0.08)" style={{ paddingHorizontal: 5 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SwipeableList;

const styles = StyleSheet.create({
  txtContainer: {
    padding: 10,
  },
  activeText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  inactiveText: {
    fontSize: 14,
    color: "gray",
  },
});
