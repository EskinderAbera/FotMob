import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, View } from "react-native";

import Colors from "../../constants/Colors";
import React from "react";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarMaterialIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Matches",
          tabBarIcon: ({ color }) => (
            <TabBarMaterialIcon name="soccer-field" color={color} />
          ),
          headerTitle: "FotMob",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
            >
              <Pressable>
                {({ pressed }) => (
                  <Entypo
                    name="dots-three-vertical"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="search"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <Entypo
                    name="calendar"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 25, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </View>
          ),
          // <Link href="/modal" asChild>
          //   <Pressable>
          //     {({ pressed }) => (
          //       <FontAwesome
          //         name="info-circle"
          //         size={25}
          //         color={Colors[colorScheme ?? "light"].text}
          //         style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //       />
          //     )}
          //   </Pressable>
          // </Link>
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
