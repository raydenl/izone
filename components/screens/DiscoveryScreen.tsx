import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { context } from '../../store/store';
import udp from '../../utils/udp';

const DiscoveryScreen = ({ navigation }: any) => {
    const { state, actions } = useContext(context);

    useEffect(() => {
        actions.startDiscovery();
        udp
            .then(data => {
                actions.discoverySuccess(data);
                navigation.navigate('Tabs');
            })
            .catch(err => actions.discoveryFailure(err));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading devices...</Text>
        </View>
    );
};

export default DiscoveryScreen;