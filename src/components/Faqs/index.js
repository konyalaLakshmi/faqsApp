// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul">
            {faqsList.map(each => (
              <FaqItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
