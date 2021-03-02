import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';

import { context } from '../../store/store';

const DiscoveryScreen = ({ navigation }: any) => {
  const { state, actions } = useContext(context);

  useEffect(() => {
    actions.discoverBridge();
  }, []);

  useEffect(() => {
    if (state.discovery.ip) {
      navigation.navigate('Tabs');
    }
  }, [state.discovery.ip]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading devices...</Text>
    </View>
  );
};

export default DiscoveryScreen;
