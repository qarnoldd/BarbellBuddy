import RedButton from "@/components/ui/redbutton";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function NewRoutineScreen({ title }: { title: string }) {
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
    <SafeAreaView className="bg-gray-900 h-full ">
      <View className="w-dvw h-24 justify-center bg-gray-950 border-b-2 border-red-700 pt-3 pb-4 pl-2">
        <Text className="text-white font-RobotoBoldItalic text-4xl mt-7">
          Create a new routine
        </Text>
      </View>
      <ScrollView className="w-[90%] mr-auto ml-auto">
        <Text className="text-white pt-5 font-RobotoExtraLight text-lg">
          Routine Name
        </Text>
        <TextInput
          placeholder="e.g., Push Pull Legs"
          className="bg-gray-700 rounded-2xl mt-4 text-white font-RobotoExtraLight text-lg pl-3 h-12"
        />
        <Text className="text-white pt-5 font-RobotoExtraLight text-lg">
          Days
        </Text>
        <RedButton
          width={300}
          height={85}
          label="Add Day"
          func={() => router.navigate("/routines/addday")}
        />
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
