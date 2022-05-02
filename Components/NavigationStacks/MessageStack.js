import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conversations from '../Conversations';
import Chat from '../Chat';
import LoadConversations from '../LoadConversations';
import LoadFriends from '../LoadFriends';
import colors from '../../styles/theme';

const Stack = createNativeStackNavigator();

const MessageStack = ({ navigation, route }) => {
    return(
        <Stack.Navigator initialRouteName='Conversations'
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
        >
            <Stack.Screen name="Conversations" component={Conversations} />
            <Stack.Screen name="LoadConversations" component={LoadConversations} />
            <Stack.Screen name="LoadFriends" component={LoadFriends} />
        </Stack.Navigator>
    );
};

export default MessageStack;