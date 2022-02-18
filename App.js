import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import {store} from "./app/state/store";
import  MainStack  from './app/routes/MainStack';

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#16d9d9',
    accent: '#9baaaa',
    primaryOther: '#2B2D42',
    background: '#EDF2F4',
  },
};

export default function App() {
  return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
