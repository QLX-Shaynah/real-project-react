import React from 'react';
import axios from 'axios';

export default class Cryptocurrency extends React.Component {
  state = {
    LIST: []
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD')
      .then(res => {
        const LIST = res.data;
        this.setState({ LIST });
      })
  }

  render() {
    return (
      <ul>
        { this.state.LIST.map(currency => <li>{currency}</li>)}
      </ul>
    )
  }
}