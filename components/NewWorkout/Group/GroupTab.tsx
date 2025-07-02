import { useRef, useState } from "react";
import { Animated, Pressable, ScrollView, Text, View } from "react-native";
import RoutineTab from "./RoutineTab";

export default function GroupTab({ title }: { title: string }) {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    Animated.timing(heightAnim, {
      toValue: active ? 0 : 260,
      duration: 400,
      useNativeDriver: false,
    }).start();
    setActive(!active);
  };

  return (
    <View>
      <Pressable
        className="bg-gray-800 h-14 border-gray-600 border-b-2 active:bg-gray-900"
        onPress={toggleActive}
      >
        <Text className="mt-auto mb-auto text-white font-RobotoBoldItalic text-3xl ml-4">
          {title}
        </Text>
      </Pressable>
      <Animated.View style={{ height: heightAnim, overflow: "hidden" }}>
        <ScrollView>
          <RoutineTab name="Push" />
          <RoutineTab name="Push" />
          <RoutineTab name="Push" />
        </ScrollView>
      </Animated.View>
    </View>
  );
}
