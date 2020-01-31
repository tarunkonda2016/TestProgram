import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import QuantityComponent from './QuantityComponent';

class App extends Component {
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
      totalAmount: 0,
    };
    this.customerClick = this.customerClick.bind(this);
    this.clear = this.clear.bind(this);
    this.colorState = this.colorState.bind(this);
  }

  clear = () => {
    this.setState(
      {
        selected: 'default',
        smallPizzaQuantity: 0,
        mediumPizzaQuantity: 0,
        largePizzaQuantity: 0,
      },
      () => {
        this.total();
      },
    );
  };

  customerClick = value => {
    if (this.state.selected !== value) {
      this.setState({selected: value}, () => {
        this.total();
      });
    }
  };

  total() {
    this.state.totalAmount = 0;
    const {
      smallPizzaPrice,
      smallPizzaQuantity,
      mediumPizzaQuantity,
      mediumPizzaPrice,
      largePizzaQuantity,
      largePizzaPrice,
    } = this.state;
    if (this.state.selected === 'default') {
      let count =
        smallPizzaQuantity * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        largePizzaPrice * largePizzaQuantity;
      this.setState({totalAmount: count});
    } else if (this.state.selected === 'infosys') {
      let smallPizza = (smallPizzaQuantity / 3) * 2;
      let count =
        Math.ceil(smallPizza) * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        largePizzaPrice * largePizzaQuantity;
      this.setState({totalAmount: count});
    } else if (this.state.selected === 'amazon') {
      let count =
        smallPizzaQuantity * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        299.99 * largePizzaQuantity;
      this.setState({totalAmount: count});
    } else if (this.state.selected === 'fb') {
      let mediumPizza = (mediumPizzaQuantity / 5) * 4;
      let count =
        Math.ceil(mediumPizza) * mediumPizzaPrice +
        smallPizzaQuantity * smallPizzaPrice +
        389.99 * largePizzaQuantity;
      this.setState({totalAmount: count});
    }
  }

  colorState = value => {
    let colorState = this.state.selected;
    if (
      colorState === value ||
      colorState === value ||
      colorState === value ||
      colorState === value
    ) {
      return 'orange';
    } else {
      return null;
    }
  };

  render() {
    console.log('data', this.props.reducerData);

    return (
      <>
        <SafeAreaView style={styles.safeAreaContainer}>
          <StatusBar />
          <View style={styles.container}>
            <View style={styles.btnStyleView}>
              <Button
                title={'Default Customer'}
                color={this.colorState('default')}
                onPress={() => this.customerClick('default')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Infosys Customer'}
                color={this.colorState('infosys')}
                onPress={() => this.customerClick('infosys')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Amazon Customer'}
                color={this.colorState('amazon')}
                onPress={() => this.customerClick('amazon')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Facebook Customer'}
                color={this.colorState('fb')}
                onPress={() => this.customerClick('fb')}
              />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Small Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$269.99</Text>
              </Text>

              <QuantityComponent type={'small'} />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Medium Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$322.99</Text>
              </Text>
              <QuantityComponent type={'medium'} />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Large Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$269.99</Text>
              </Text>

              <QuantityComponent type={'large'} />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <View style={{width: '40%'}} />

              <View style={{width: '60%'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Total : $
                  {Math.round((this.state.totalAmount + Number.EPSILON) * 100) /
                    100}
                </Text>
              </View>
            </View>

            <Button title={'clear'} onPress={this.clear} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = state => ({
  reducerData: state.PizzaCalculateReducer,
});
export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1},
  container: {flex: 1, flexDirection: 'column'},
  btnStyleView: {margin: 5},
});
