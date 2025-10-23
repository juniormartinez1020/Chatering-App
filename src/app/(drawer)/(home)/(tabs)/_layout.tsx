import { Tabs } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {

  const isGlass = true

  if (isGlass) {   
    return (
        <NativeTabs>
        <NativeTabs.Trigger name="chats">
          <Label>Chats</Label>
          <Icon sf="message.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <Icon sf="gear" drawable="custom_settings_drawable" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
  
        <NativeTabs.Trigger name='search' role='search'>
          <Label>search</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    )
  }

  return <Tabs />

}