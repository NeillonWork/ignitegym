import { StatusBar } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { config } from "./config/gluestack-ui.config";

import { Loading } from "@components/Loading";
import { SignIn } from "@screens/Signin";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
