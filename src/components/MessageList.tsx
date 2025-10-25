import messages from "@/data/messages";
import { FlatList } from "react-native";
import MessageListItem from "./MessageListItem";

export default function MessageList() {

    const isMyId = 'u-1'

    return (
       <FlatList
       data={messages}
       contentContainerClassName="p-4"
       renderItem={({ item }) => 
       <MessageListItem 
       message={item} 
       isOwnMsj={item.user.id === isMyId}
       />
    }
    inverted
    showsVerticalScrollIndicator={false}
       />
    )
}