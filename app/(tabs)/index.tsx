import Plus from "@/assets/svgreact/plus";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="h-dvh">
        <View className="w-dvw h-24 justify-center bg-gray-950 border-b-2 border-red-700 pt-3 pb-4 pl-2">
          <Text className="text-white font-RobotoBoldItalic text-5xl mt-2">
            Monday
          </Text>
        </View>
        <View className="h-[100%]">
          <Text className="mt-52 text-2xl mr-auto ml-auto text-white font-RobotoExtraLight ">
            Nothing today
          </Text>
          <Pressable
            className=" mt-56 h-40 w-64 bg-gray-700 rounded-lg justify-center ml-auto mr-auto active:bg-gray-800"
            onPress={() => router.navigate("/workout")}
          >
            <View className="ml-auto mr-auto">
              <Plus />
            </View>
            <Text className="ml-auto mr-auto text-white font-Roboto_CondensedMedium">
              Start Workout
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
