import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="arrowright" />
      <Stack.Screen name="(home)/_layout" />
    </Stack>
  );
}
