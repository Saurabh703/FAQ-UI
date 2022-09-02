import React, { useState } from 'react';
import FAQ from './FAQ';
import Header from './Header';

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issue.',
      open: true
    },
    {
      question: 'What is IoT in simple words?',
      answer: 'The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention.',
      open: false
    },
    {
      question: 'What are examples of IoT devices?',
      answer: 'Connectivity. This doesn\'t need too much further explanation. ',
      open: false
    }
  ])

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq
    }))
  }
  return (
    <div className="App">
     <Header/>
     <div className="faqs">
       {faqs.map((faq, i) => (
         <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
  ))}
     </div>
    </div>
  );
}

export default App;
