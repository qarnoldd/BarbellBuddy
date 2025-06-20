import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="bg-gray-900  h-full">
      <View className="mt-[50%] ml-10 mr-10 h-[50%] pt-2">
        <Text className="text-white text-4xl text-center">BarbellBuddy</Text>
        <Text className="text-white pt-10">Username</Text>
        <TextInput className="bg-gray-700 rounded-2xl mt-4" />
        <Text className="text-white mt-10">Password</Text>
        <TextInput className="bg-gray-700 rounded-2xl mt-4" />
        <Pressable>
          <Text className="text-white">Forgot Password</Text>
        </Pressable>
        <View className="flex flex-row ">
          <Pressable className="bg-red-600 rounded-3xl ">
            <Text className="text-white text-xl">Login</Text>
          </Pressable>
          <Pressable className="bg-red-600 rounded-3xl ">
            <Text className="text-white text-xl">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
