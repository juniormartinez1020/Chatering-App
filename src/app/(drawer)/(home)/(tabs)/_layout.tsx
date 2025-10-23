import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'chat' ,
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="chat" size={size} color={color} />
                )
            }} 
            />
            <Tabs.Screen 
            name="settings" 
            options={{ title: 'settings' }} 
            />
        </Tabs>
    )
}