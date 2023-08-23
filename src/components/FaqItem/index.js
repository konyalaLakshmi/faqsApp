// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isBtnClicked: false}

  toggleBtn = () => {
    this.setState(prev => ({isBtnClicked: !prev.isBtnClicked}))
  }

  displayItem = () => {
    const {isBtnClicked} = this.state
    const {details} = this.props
    const {answerText} = details

    if (isBtnClicked) {
      return (
        <div className="li-item">
          <hr className="hr" />
          <p className="p">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isBtnClicked} = this.state
    const {details} = this.props
    const {questionText} = details
    const imgUrl = isBtnClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isBtnClicked ? 'minus icon' : 'plus icon'

    return (
      <li className="li-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="b" type="button" onClick={this.toggleBtn}>
            <img src={imgUrl} alt={altText} className="img" />
          </button>
        </div>
        {this.displayItem()}
      </li>
    )
  }
}

export default FaqItem
