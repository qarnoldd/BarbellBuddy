import GroupTab from "@/components/NewWorkout/Group/GroupTab";
import RedButton from "@/components/ui/redbutton";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function WorkoutScreen() {
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
        <RedButton
          width={250}
          height={120}
          label="New Routine"
          func={() => router.navigate("/routines/createroutine")}
        />
        <View className="ml-10 mt-10">
          <Pressable
            className="mt-10 bg-gray-700 rounded-xl justify-center w-20 h-10 mr-10 active:bg-gray-900"
            onPress={() => router.back()}
          >
            <Text className="font-Roboto_CondensedMedium text-white text-lg ml-auto mr-auto pl-50">
              Cancel
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
