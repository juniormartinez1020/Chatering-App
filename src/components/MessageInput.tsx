import {  KeyboardAvoidingView, Platform, Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

export default function MessageInput() {

    const [message, setMessage] = useState('')

    const handleSend = () => {
        // store the db
        console.log('send msj')

        setMessage('')
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}
        >
            <SafeAreaView
        edges={['bottom']}
         className="p-4 flex-row gap-4 bg-slate-50 border-t border-gray-200 items-center"
         >

           <Pressable
           className="bg-gray-200 rounded-full p-2 w-10 h-10"
           >
             <Ionicons
             name="image"
             size={20}
             color='#6b5280'
             />
           </Pressable>


            <TextInput 
            placeholder="typing some.."
            value={message}
            onChangeText={setMessage}
            multiline
            className="bg-gray-200 flex-1 rounded-3xl px-4 py-3
            text-gray-700 text-base max-h-[120px]"
            />

           <Pressable
           onPress={handleSend}
           disabled={!message}
           className={`${message ? 'bg-blue-500' : 'bg-slate-300'} 
           rounded-full p-2 w-10 h-10
           items-center justify-center`}
           >
             <Ionicons
             name="send"
             size={20}
             color='#6b5280'
             />
           </Pressable>
          </SafeAreaView>
        </KeyboardAvoidingView>
    )
}