import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {

    const { signOut } = useAuth()

    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='text-3xl'>
                setting...
            </Text>

             <Button
             onPress={() => signOut()}
             title="sign out"
             />
        </View>
    )
}