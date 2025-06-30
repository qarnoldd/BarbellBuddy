import Plus from "@/assets/svgreact/plus";
import GroupTab from "@/components/NewWorkout/Group/GroupTab";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="w-dvw h-24 justify-center bg-gray-950 border-b-2 border-red-700 pt-3 pb-4 pl-2">
        <Text className="text-white font-RobotoBoldItalic text-5xl mt-2">
          New Workout
        </Text>
      </View>
      <ScrollView>
        <GroupTab title="PPL" />
        <GroupTab title="Upper Lower" />
        <GroupTab title="Bro Split" />
        <Pressable
          className="mt-10 h-32 w-80 bg-red-600 rounded-lg justify-center ml-auto mr-auto active:bg-red-800"
          onPress={() => router.navigate("/workout")}
        >
          <View className="ml-auto mr-auto">
            <Plus />
          </View>
          <Text className="ml-auto mr-auto text-white font-Roboto_CondensedMedium">
            New Routine
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
