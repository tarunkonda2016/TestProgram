import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class QuantityComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.minusClick = this.minusClick.bind(this);
    this.addClick = this.addClick.bind(this);
  }

  minusClick = () => {};

  addClick = () => {};

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.minusClick} style={{width: '10%'}}>
          <Text style={{fontSize: 20, color: 'black'}}>-</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            color: 'black',
            width: '10%',
            marginHorizontal: 5,
          }}>
          {1}
        </Text>

        <TouchableOpacity onPress={this.addClick} style={{width: '10%'}}>
          <Text style={{fontSize: 20, color: 'black'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
