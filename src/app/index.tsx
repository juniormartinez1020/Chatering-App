

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-3xl'>Home...</Text>

            <Link href={'/about'}>
             go to about..
            </Link>
        </View>
    )
}