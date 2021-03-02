import React, { useContext, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import { context } from '../../store/store';

const HomeScreen = () => {
  const { state, actions } = useContext(context);

  useEffect(() => {
    actions.getStatus();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home {state.status.unitType}</Text>
      <Button onPress={actions.turnOn} title="Turn On" />
      <Button onPress={actions.turnOff} title="Turn Off" />
    </View>
  );
};

export default HomeScreen;
