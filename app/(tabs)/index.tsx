import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  return (
    <SafeAreaView className="bg-gray-900 h-full">
      <View className="h-dvh">
        <View className="w-dvw h-24 justify-center bg-gray-950 border-b-2 border-red-700 pt-3 pb-4 pl-2">
          <Text className="text-white font-RobotoBoldItalic text-5xl mt-2">
            Chest
          </Text>
          <Text className="text-white font-Roboto_CondensedLight t-0 pl-1">
            Monday
          </Text>
        </View>
        <View className="">
          <View className="h-12  flex flex-row justify-between bg-red-900 border-b-2 border-red-800">
            <Text className="pl-5 text-white font-Roboto_CondensedMedium mt-auto mb-auto">
              Bench Press
            </Text>
            <Text className="pr-5 text-white font-Roboto_CondensedMedium mt-auto mb-auto">
              ...
            </Text>
          </View>

          <View>
            <View className="flex flex-row justify-between mt-10 ml-14 mr-14 mb-10">
              <View>
                <View className="flex flex-row h-20">
                  <TextInput className="rounded-lg text-4xl text-white bg-gray-400 border-2 border-gray-300 m-2">
                    50
                  </TextInput>
                  <Text className="text-2xl mt-auto mb-auto text-white">
                    kg
                  </Text>
                </View>
                <Text className="text-2xl text-white">Weight</Text>
              </View>

              <View className="flex flex-row h-20">
                <TextInput className="rounded-lg text-4xl text-white bg-gray-400 border-2 border-gray-300 m-2">
                  10
                </TextInput>
                <Text className="text-2xl mt-auto mb-auto text-white">
                  reps
                </Text>
              </View>
              <Pressable className="mt-4 rounded-lg w-14 h-14 bg-green-400 active:bg-green-700">
                <Text className="mt-auto mb-auto text-white text-2xl text-center">
                  +
                </Text>
              </Pressable>
            </View>

            <View className="flex flex-row justify-between pt-2 pb-1 pl-5 pr-5 bg-slate-700 border-b-2 border-gray-500">
              <View className="flex flex-row">
                <Text className="text-white">50 kg</Text>
                <Text className="text-white ml-5">10 reps</Text>
              </View>
              <Pressable>
                <Text className="text-white mt-auto mb-auto text-xl">+</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View className="h-12 flex flex-row justify-between bg-gray-800 border-b-2 border-gray-600">
          <Text className="pl-5 text-white font-Roboto_CondensedMedium mt-auto mb-auto">
            Machine Shoulder Press
          </Text>
          <Text className="pr-5 text-white font-Roboto_CondensedMedium mt-auto mb-auto">
            ...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
