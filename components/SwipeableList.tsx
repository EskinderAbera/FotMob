import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  PanResponder,
  PanResponderInstance,
} from "react-native";

interface Props {
  data: string[];
}

const SwipeableList: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const panResponderRef = useRef<PanResponderInstance>(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > 50) {
          const nextIndex = activeIndex + (gestureState.dx > 0 ? -1 : 1);
          if (nextIndex >= 0 && nextIndex < data.length) {
            setActiveIndex(nextIndex);
            flatListRef.current?.scrollToIndex({ index: nextIndex });
          }
        }
      },
    })
  );

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.itemContainer}>
      <Text
        style={index === activeIndex ? styles.activeText : styles.inactiveText}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <View style={styles.container} {...panResponderRef.current.panHandlers}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={100}
        snapToAlignment="center"
      />
    </View>
  );
};

export default SwipeableList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inactiveText: {
    fontSize: 16,
  },
});
