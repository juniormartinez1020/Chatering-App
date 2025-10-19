import './global.css';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-100'>
      <Text className='text-2xl font-bold text-green-600'>hello aliens 👽✔️</Text>
      <StatusBar style="auto" />
    </View>
  );
}

