import React from 'react';
import { Button, ThemeProvider, Icon, Image } from 'react-native-elements';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <LockPage />
      </ThemeProvider>
    </React.Fragment>
  );
};

class LockPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIcon: 'green',
      iconName: 'unlock',
    };
  }

  toggleLock = () => {
    if (this.state.colorIcon == 'green') {
      
      this.setState({
        colorIcon: 'red',
        iconName: 'lock',
      });
    } else {
      this.setState({
        colorIcon: 'green',
        iconName: 'unlock',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleLock}>
          <Icon
            reverse
            name={this.state.iconName}
            type="font-awesome"
            color={this.state.colorIcon}
            size="80"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'black',
  },
});

export default App;

