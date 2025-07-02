import CreateRoutineTab from "@/components/NewWorkout/Group/CreateWorkout/AddExercise";
import RedButton from "@/components/ui/redbutton";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewDayScreen({ title }: { title: string }) {
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(false);
  const router = useRouter();
  const toggleActive = () => {
    Animated.timing(heightAnim, {
      toValue: active ? 0 : 260,
      duration: 400,
      useNativeDriver: false,
    }).start();
    setActive(!active);
  };

  return (
    <SafeAreaView
      edges={["top", "left", "right", "bottom"]}
      className="bg-gray-900 h-full"
    >
      <View className="w-dvw h-24 justify-center bg-gray-950 border-b-2 border-red-700 pt-3 pb-4 pl-2">
        <Text className="text-white font-RobotoBoldItalic text-4xl mt-7">
          Add a day
        </Text>
      </View>
      <ScrollView>
        <View className="w-[90%] mr-auto ml-auto">
          <Text className="text-white pt-5 font-RobotoExtraLight text-lg">
            Day Name
          </Text>
          <TextInput
            placeholder="e.g., Leg Day"
            className="bg-gray-700 rounded-2xl mt-4 text-white font-RobotoExtraLight text-lg pl-3 h-12"
          />
          <Text className="text-white pt-5 font-RobotoExtraLight text-lg">
            Exercises
          </Text>
          <CreateRoutineTab name="Push" />
          <RedButton
            width={300}
            height={90}
            label="Add Exercise"
            func={() => console.log("Add Exercise")}
          />
        </View>
        <View className="flex-row justify-between ml-10">
          <Pressable
            className="mt-10 bg-gray-700 rounded-xl justify-center w-20 h-10 mr-10 active:bg-gray-900"
            onPress={() => router.back()}
          >
            <Text className="font-Roboto_CondensedMedium text-white text-lg ml-auto mr-auto pl-50">
              Cancel
            </Text>
          </Pressable>
          <Pressable
            className="mt-10 bg-red-700 rounded-xl justify-center w-20 h-10 mr-10 active:bg-red-900"
            onPress={() => router.navigate("/(tabs)")}
          >
            <Text className="font-Roboto_CondensedMedium text-white text-lg ml-auto mr-auto pl-50">
              Confirm
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
