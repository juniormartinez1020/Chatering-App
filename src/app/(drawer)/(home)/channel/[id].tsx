import channels from "@/data/channels";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ChannelScreen() {

    const { id } = useLocalSearchParams()

    const channel = channels.find((c) => c.id === id)


    if (channel) {
        <View>
            <Text>channel not founded</Text>
        </View>
    }

    return (
        <View
        className="flex-1 items-center justify-center"
        >
            <Stack.Screen 
            options={{ title: channel.name }}
            />

            <Text className="text-2xl">
                channel screen: {channel.name}
            </Text>
        </View>
    )
}