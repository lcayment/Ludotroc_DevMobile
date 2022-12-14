// NOTE DU 11/05 : ON LE GARDE MAIS N'EST PAS UTILISE POUR L'INSTANT

import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputState {
  text: string;
}
interface InputProps {
  onSubmitEditing: (text: string) => void;
  placeholder: string;
}

export default class Input extends React.Component<InputProps, InputState> {
  state = {
    text: '',
  };

  onChangeText = (text: string) => {
    this.setState({ text });
  };

  onSubmitEditing = () => {
    // Don't submit if empty
    if (this.state.text) {
      this.props.onSubmitEditing(this.state.text);
      // Reset text after submission
      this.setState({ text: '' });
    }
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'whitesmoke',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});
