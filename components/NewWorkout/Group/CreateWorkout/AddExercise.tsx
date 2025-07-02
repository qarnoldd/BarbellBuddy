import Plus from "@/assets/svgreact/plus";
import { Pressable, Text, View } from "react-native";

export default function AddExercise({ name }: { name: string }) {
  return (
    <View>
      <Pressable className="mt-4 h-14 w-80 bg-gray-500 rounded-lg ml-auto mr-auto active:bg-gray-700 flex-row justify-between">
        <Text className="ml-6 mt-auto mb-auto text-white font-Roboto_CondensedMedium justify-center">
          {name}
        </Text>
        <View className="mr-4 mt-auto mb-auto">
          <Plus />
        </View>
      </Pressable>
    </View>
  );
}
