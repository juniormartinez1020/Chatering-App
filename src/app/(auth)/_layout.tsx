import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack>
             <Stack.Screen 
            name="sign-in"
            options={{
                title: 'sign in',
                headerLargeTitle: true
            }}
            />
    

            <Stack.Screen 
            name="sign-up"
            options={{
                title: 'sign up',
                headerLargeTitle: true
            }}
            />
        </Stack>
    )
}