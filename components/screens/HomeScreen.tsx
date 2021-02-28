import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { context } from '../../store/store';

const HomeScreen = () => {
    const { state, actions } = useContext(context);

    useEffect(() => {
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;