import { Message } from "@/app/types";
import { Image, Text, View } from "react-native";

type MessageListItemProps = {
    message: Message
    isOwnMsj?: boolean
}

export default function MessageListItem({ message, isOwnMsj }: MessageListItemProps) {
    return (
      <View className={`flex-row mb-2 ${isOwnMsj ? 'justify-end' : 'justify-start'}`}>
         <View
       className={`max-w-[75%] gap-1 ${isOwnMsj ? 'items-end' : 'items-start'}`}
       >
        {/* img */}
        {message.image && (
            <Image
            source={{ uri: message.image }}
            className="w-48 h-48 rounded-lg"
            />
        )}


        {/* text bub */}

          {message.content && (
            <View
            className={`rounded-2xl px-4 py-2 ${isOwnMsj ? 'bg-blue-400 rounded-br-md' :
                 'bg-gray-300 rounded-bl-md'}`}
            >
                <Text className={`text-base ${isOwnMsj ? 'text-slate-50' : 'text-neutral-800'}`}>
                    {message.content}
                </Text>
            </View>
          )}
       </View>
      </View>
    )
}