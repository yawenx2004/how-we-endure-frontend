import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home"}} />
            <Tabs.Screen name="analysis" options={{ title: "Analysis "}} />
            <Tabs.Screen name="friends" options={{ title: "Friends" }} />
            <Tabs.Screen name="tools" options={{ title: "Tools" }} />
        </Tabs>
    );
}
