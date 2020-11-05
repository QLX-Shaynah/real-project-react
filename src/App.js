import React, {Component } from 'react';
import axios from 'axios';
//import Cryptocurrency from './currencies';

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR'
  // baseURL: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD'
  //- this was the original endpoint I was using that would display the data of each cyrpotcurrency in USD but it stopped returning data in the console
})
class App extends Component{

  state = {
    currencies: []
  }
  constructor(){
    super();
    api.get('/').then(res=>{
      console.log(res.data);
    

      /*
      TRIED THIS TUTORIAL https://www.youtube.com/watch?v=LEBho3PUV3s
      - they did it using fetch so then I looked into fetch for a bit 

      TRIED THIS TUTORIAL: https://www.youtube.com/watch?v=12l6lkW6JhE
      - they did not have to parse anything since their data was in the correct form

      this.setState({ currencies: res.data})
      //this.state.currencies.map(currency => o )
      
      api.get('/').then(res=> res.json()).then(res=>{
        console.log(res.data);
        const parseData = JSON.parse(res.data);
        console.log(parseData);
        this.setState({ currencies: res.data})
      })
    */
   })
  }


  render(){
    return(
    <h2> Welcome to my App </h2>
       /* <p id="demo"></p>
        <script>


      TRIED THE EXAMPLE FROM W3 SCHOOLS https://www.w3schools.com/js/js_json_parse.asp
        var text = res.data;
        var obj = JSON.parse(text);
  
        document.getElementById("demo").innerHTML = obj.symbol + ", " + obj.price;
    );
    */
    );
}
}
export default App;

/*
TRIED THIS TUTORIAL : https://www.youtube.com/watch?v=gFbGTa-WV6s
-   tried this before knowing I was having a parsing issue 

  componentDidMount = ()=>{
    axios({
    url: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD',
     

      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET'
    })
    .then((response)=>{
      console.log('Data: ', response.data);
      this.setState({ currencies: response.data});
     
    })
    .catch(()=>{
      alert('Error');
    });
  }
  render(){
    return(
        <h2> Welcome to my App </h2>
    );
  }/
}*/
