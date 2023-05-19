import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ConnectWallet } from '@thirdweb-dev/react-native';

const Homepage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const textStyles = {
    ...styles.heading,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.view}>
        <Text style={textStyles}>SuperPay</Text>
        <ConnectWallet />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Homepage;
