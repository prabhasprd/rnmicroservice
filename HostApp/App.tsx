import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MicroApplication} from './microscrvices';

const App = () => {
  const [visibleApp, setVisibleApp] = useState<boolean>(false);

  const onHandleClick = (booleanValue: boolean): void => {
    setVisibleApp(booleanValue);
  };

  return (
    <SafeAreaView
      style={{
        width: '95%',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
      }}>
      <Text>Host Application</Text>
      <TouchableOpacity
        onPress={() => onHandleClick(true)}
        activeOpacity={0.4}
        style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#c0c0c0',
          marginTop: 20,
        }}>
        <Text>Switch to Micro Application</Text>
      </TouchableOpacity>
      {visibleApp && (
        <React.Suspense fallback={<Text>Loading Micro Application ...</Text>}>
          <MicroApplication onHandleSwitch={() => onHandleClick(false)} />
        </React.Suspense>
      )}
    </SafeAreaView>
  );
};

export default App;
