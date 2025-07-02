import Plus from "@/assets/svgreact/plus";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function GrayButton({
  width,
  height,
  label,
  func,
}: {
  width: number;
  height: number;
  label: string;
  func: () => void;
}) {
  const router = useRouter();
  return (
    <Pressable
      style={{ width, height }}
      className="mt-10 bg-gray-600 rounded-lg justify-center ml-auto mr-auto active:bg-gray-800"
      onPress={() => router.navigate("/routines/createroutine")}
    >
      <View className="ml-auto mr-auto">
        <Plus />
      </View>
      <Text className="ml-auto mr-auto text-white font-Roboto_CondensedMedium">
        {label}
      </Text>
    </Pressable>
  );
}
