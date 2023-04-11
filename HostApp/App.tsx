import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {MicroApplication, MicroApplicationHome} from './microscrvices';

interface visibleAppProps {
  screen1: boolean;
  screen2: boolean;
}

const App = () => {
  const [visibleApp, setVisibleApp] = useState<visibleAppProps>({
    screen1: false,
    screen2: false,
  });

  const onHandleClick = (booleanValue: boolean, screenName: string): void => {
    setVisibleApp({...visibleApp, [screenName]: booleanValue});
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
        onPress={() => onHandleClick(true, 'screen1')}
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
        <Text>Switch to Micro Application App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onHandleClick(true, 'screen2')}
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
        <Text>Switch to Micro Application Homescreen</Text>
      </TouchableOpacity>
      {visibleApp.screen1 && (
        <React.Suspense
          fallback={<Text>Loading Micro Application App ...</Text>}>
          <MicroApplication
            onHandleSwitch={() => onHandleClick(false, 'screen1')}
          />
        </React.Suspense>
      )}

      {visibleApp.screen2 && (
        <React.Suspense
          fallback={<Text>Loading Micro Application Homescreen ...</Text>}>
          <MicroApplicationHome
            onHandleSwitch={() => onHandleClick(false, 'screen2')}
          />
        </React.Suspense>
      )}
    </SafeAreaView>
  );
};

export default App;
