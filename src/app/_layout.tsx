import '../../global.css'
import { Stack } from "expo-router";

export default function RootLayout() {

    const isAuthentic = true

    return (
        <Stack screenOptions={{ headerShown: false }}>

            <Stack.Protected guard={!isAuthentic}>
              <Stack.Screen name='(auth)' />
            </Stack.Protected>

            <Stack.Protected guard={isAuthentic}>
                <Stack.Screen
                    name='(drawer)'
                />
            </Stack.Protected>

             
        </Stack>
    )
}