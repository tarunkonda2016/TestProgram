import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'default',
      smallPizzaPrice: 269.99,
      mediumPizzaPrice: 322.99,
      largePizzaPrice: 394.99,
      smallPizzaQuantity: 0,
      mediumPizzaQuantity: 0,
      largePizzaQuantity: 0,
      totalAmount: 0
    };
    this.customerClick = this.customerClick.bind(this)
    this.clear = this.clear.bind(this)
  }


  clear = () => {
    this.setState({ selected: 'default', smallPizzaQuantity: 0, mediumPizzaQuantity: 0, largePizzaQuantity: 0 }, () => {
      this.total()
    })
  }

  customerClick = (value) => {
    if (this.state.selected !== value) {
      this.setState({ selected: value }, () => {
        this.total()
      })
    }
  }

  total() {
    this.state.totalAmount = 0;
    const { smallPizzaPrice, smallPizzaQuantity, mediumPizzaQuantity, mediumPizzaPrice, largePizzaQuantity, largePizzaPrice } = this.state
    if (this.state.selected === 'default') {
      let count = smallPizzaQuantity * smallPizzaPrice + mediumPizzaPrice * mediumPizzaQuantity + largePizzaPrice * largePizzaQuantity
      this.setState({ totalAmount: count })
    } else if (this.state.selected === 'infosys') {
      let smallPizza = smallPizzaQuantity / 3 * 2;
      let count = Math.ceil(smallPizza) * smallPizzaPrice + mediumPizzaPrice * mediumPizzaQuantity + largePizzaPrice * largePizzaQuantity
      this.setState({ totalAmount: count })
    } else if (this.state.selected === 'amazon') {
      let count = smallPizzaQuantity * smallPizzaPrice + mediumPizzaPrice * mediumPizzaQuantity + 299.99 * largePizzaQuantity
      this.setState({ totalAmount: count })
    } else if (this.state.selected === 'fb') {
      let mediumPizza = mediumPizzaQuantity / 5 * 4;
      let count = Math.ceil(mediumPizza) * mediumPizzaPrice + smallPizzaQuantity * smallPizzaPrice + 389.99 * largePizzaQuantity
      this.setState({ totalAmount: count })
    }

  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <View style={{ flex: 1, flexDirection: 'column' }}>


            <View style={{ margin: 5 }}>
              <Button title={'Default Customer'} color={this.state.selected === 'default' ? 'orange' : null} onPress={() => this.customerClick('default')} />
            </View>

            <View style={{ margin: 5 }}>
              <Button title={'Infosys Customer'} color={this.state.selected === 'infosys' ? 'orange' : null} onPress={() => this.customerClick('infosys')} />
            </View>

            <View style={{ margin: 5 }}>
              <Button title={'Amazon Customer'} color={this.state.selected === 'amazon' ? 'orange' : null} onPress={() => this.customerClick('amazon')} />
            </View>

            <View style={{ margin: 5 }}>
              <Button title={'Facebook Customer'} color={this.state.selected === 'fb' ? 'orange' : null} onPress={() => this.customerClick('fb')} />
            </View>

            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Text style={{ fontSize: 20, color: 'black', width: '60%' }}>Small Pizza <Text style={{ fontSize: 15, color: 'grey' }}>$269.99</Text></Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.state.smallPizzaQuantity > 0 ? this.setState({ smallPizzaQuantity: this.state.smallPizzaQuantity - 1 }, () => {
                this.total()
              }) : null}>
                <Text style={{ fontSize: 20, color: 'black' }}>-</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: 'black', width: '10%', marginHorizontal: 5 }}>{this.state.smallPizzaQuantity}</Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.setState({ smallPizzaQuantity: this.state.smallPizzaQuantity + 1 }, () => {
                this.total()
              })}>
                <Text style={{ fontSize: 20, color: 'black' }}>+</Text>
              </TouchableOpacity>



            </View>





            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Text style={{ fontSize: 20, color: 'black', width: '60%' }}>Medium Pizza <Text style={{ fontSize: 15, color: 'grey' }}>$322.99</Text></Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.state.mediumPizzaQuantity > 0 ? this.setState({ mediumPizzaQuantity: this.state.mediumPizzaQuantity - 1 }, () => {
                this.total()
              }) : null}>
                <Text style={{ fontSize: 20, color: 'black' }}>-</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: 'black', width: '10%', marginHorizontal: 5 }}>{this.state.mediumPizzaQuantity}</Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.setState({ mediumPizzaQuantity: this.state.mediumPizzaQuantity + 1 }, () => {
                this.total()
              })}>
                <Text style={{ fontSize: 20, color: 'black' }}>+</Text>
              </TouchableOpacity>



            </View>



            <View style={{ flexDirection: 'row', margin: 10 }}>
              <Text style={{ fontSize: 20, color: 'black', width: '60%' }}>Large Pizza <Text style={{ fontSize: 15, color: 'grey' }}>$269.99</Text></Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.state.largePizzaQuantity > 0 ? this.setState({ largePizzaQuantity: this.state.largePizzaQuantity - 1 }, () => {
                this.total()
              }) : null}>
                <Text style={{ fontSize: 20, color: 'black' }}>-</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: 'black', width: '10%', marginHorizontal: 5 }}>{this.state.largePizzaQuantity}</Text>

              <TouchableOpacity style={{ width: '10%' }} onPress={() => this.setState({ largePizzaQuantity: this.state.largePizzaQuantity + 1 }, () => {
                this.total()
              })}>
                <Text style={{ fontSize: 20, color: 'black' }}>+</Text>
              </TouchableOpacity>



            </View>


            <View style={{ flexDirection: 'row', margin: 10 }}>

              <View style={{ width: '40%' }} />

              <View style={{ width: '60%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total : ${Math.round((this.state.totalAmount + Number.EPSILON) * 100) / 100}</Text>
              </View>

            </View>


            <Button title={'clear'} onPress={this.clear} />



          </View>

        </SafeAreaView>
      </>
    );
  }
}
