import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions
    };
  }

  register = () => {
    const validate = this.refs.registerForm.getValue();
    console.log("Intento de registro");
  };

  render() {
    const { registerStruct, registerOptions } = this.state;
    return (
      <View style={styles.viewBody}>
        <Form
          ref="registerForm"
          type={registerStruct}
          options={registerOptions}
        />
        <Button title="Unirse" onPress={() => this.register()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  }
});
