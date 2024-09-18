import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.route";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
