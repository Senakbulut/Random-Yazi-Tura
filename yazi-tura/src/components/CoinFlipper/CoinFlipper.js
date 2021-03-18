import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import {getRandom} from '../../Random.js'; 
import sec from '../../consts.js';

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: sec[0],
      flipping: false,
      count: 0
    };
  }
 
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    const randomAt = getRandom(sec);
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false },() => {
      this.setState({
        side: randomAt
      });
      }), 1000);
    this.setState({
      count:this.state.count + 1
    })
  };

  render() {
    
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan <br/>
          <strong> 3 </strong>ü tura
          <strong> 2 </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
