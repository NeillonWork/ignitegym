import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/roboto";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
