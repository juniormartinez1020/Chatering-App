import ChannelListItem from "@/components/ChannelListItem";
import channels from "@/data/channels";
import { FlatList, Text, View } from "react-native";

export default function ChannelListScreen() {
    return (
           <FlatList
           data={channels}
           className="bg-slate-50"
           renderItem={({ item }) => 
            <ChannelListItem 
            channel={item}
            />
           }
           showsVerticalScrollIndicator={false}
           contentInsetAdjustmentBehavior="automatic"
           />
    )
}