import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false, title: 'home' }}
            />

            <Stack.Screen
                name="channel/[id]"
                options={{
                    title: 'channel',
                    headerBackButtonDisplayMode: 'minimal',
                    headerLargeTitle: true,
                    headerTransparent: true
                }}
            />
        </Stack>

        
    )
}