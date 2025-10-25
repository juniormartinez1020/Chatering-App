import MessageList from "@/components/MessageList";
import channels from "@/data/channels";
import messages from "@/data/messages";
import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function ChannelScreen() {

    const { id } = useLocalSearchParams<{ id: string }>()

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

            <MessageList />
        </View>
    )
}