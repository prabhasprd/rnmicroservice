import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = (props: any) => {
  const {onHandleSwitch} = props;
  return (
    <SafeAreaView
      style={{
        width: '100%',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={onHandleSwitch}
        style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#c0c0c0',
          marginTop: 20,
        }}>
        <Text>Close Micro App</Text>
      </TouchableOpacity>
      <Text>Home Screen sub</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
