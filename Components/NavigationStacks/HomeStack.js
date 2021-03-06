import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Chat from "../Chat";
import BottomTabNavigator from "./BottomTab";
import Wordmark from "../../img/logo_wordmark.svg";
import PrefsMenu from "../PrefsMenu";
import PrefsIcon from "../../img/icon_prefs.svg";
// import ActionsIcon from "../../img/icon_ellipses.svg";
// import BackIcon from "../../img/icon_back.svg";
import { TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../../styles/theme";
// import ActionsMenu from "../ActionsMenu";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation, route }) => {
    const [showPrefs, setShowPrefs] = useState(false);

    const onPrefsPress = () => {
        setShowPrefs(!showPrefs);
    }

    return (
        <>
            <SafeAreaView style={{ position: 'absolute', left: 16, zIndex: 99999 }}>
                <PrefsMenu text={'Log out'} showPrefs={showPrefs} onPrefsPress={onPrefsPress} />
            </SafeAreaView>
            <Stack.Navigator screenOptions={{
                headerShown: true,
                animation: 'none',
                headerShadowVisible: false,
            }}>
                <Stack.Screen name="Home" component={BottomTabNavigator}
                    options={({ navigation, route }) => ({
                        headerTitle: () => <Wordmark width={136.9} height={38.43} onPress={() => navigation.navigate("Search")} />,
                        headerLeft: () => <TouchableOpacity onPress={onPrefsPress}>
                            <PrefsIcon width={34} height={34} />
                        </TouchableOpacity>
                    })}
                />
                <Stack.Screen name="Chat" component={Chat}
                    options={{
                        headerShown: false,
                        contentStyle: { backgroundColor: colors.white },
                        // headerBackTitleVisible: false,
                        // headerLeft: () => (
                        //     <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        //         <BackIcon width={34} height={34} />
                        //     </TouchableOpacity>
                        // ),
                        // headerRight: () => (
                        //     <ActionsIcon width={34} height={34} />
                        // )
                    }} />
            </Stack.Navigator>
        </>
    );
}

export default HomeStack;