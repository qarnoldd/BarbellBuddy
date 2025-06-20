import { useRouter } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function LoginScreen() {
  const router = useRouter();
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-gray-900  h-full"
    >
      <View className="mt-[50%] ml-10 mr-10 h-[50%] pt-2">
        <Text className="text-white text-5xl text-center font-RobotoBoldItalic h-20">
          BarbellBuddy
        </Text>
        <Text className="text-white pt-4 font-RobotoExtraLight text-lg">
          Username
        </Text>
        <TextInput className="bg-gray-700 rounded-2xl mt-4 text-white font-RobotoExtraLight text-lg pl-3 h-12" />
        <Text className="text-white pt-10 font-RobotoExtraLight text-lg">
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          className="bg-gray-700 rounded-2xl mt-4 text-white font-RobotoExtraLight text-lg pl-3 h-12"
        />

        <View className="flex flex-row justify-between mt-2">
          <Pressable>
            <Text className="text-gray-500 font-RobotoExtraLight text-lg">
              Show Password
            </Text>
          </Pressable>
          <Pressable>
            <Text className="text-gray-500 font-RobotoExtraLight text-lg">
              Forgot Password
            </Text>
          </Pressable>
        </View>

        <View className=" mt-10 flex flex-row w-[100%] h-14 justify-center">
          <Pressable
            className="bg-red-700 rounded-2xl justify-center w-[30%] mr-10 active:bg-red-900"
            onPress={() => router.navigate("/(tabs)")}
          >
            <Text className="text-white text-xl ml-auto mr-auto pl-50">
              Login
            </Text>
          </Pressable>
          <Pressable className="bg-red-700 rounded-2xl justify-center w-[30%] ml-10 active:bg-red-900">
            <Text className="text-white text-xl ml-auto mr-auto">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
