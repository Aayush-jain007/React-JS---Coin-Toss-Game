import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        head: prevState.head + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tail: prevState.tail + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, head, tail, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button type="button" className="btn" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="stats">
            <p className="total">Total: {total}</p>
            <p className="total">Heads: {head}</p>
            <p className="total">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
