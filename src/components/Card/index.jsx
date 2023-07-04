import { useEffect, useState } from 'react'
import './styles.css'

const Card = () => {

    const [data, setData] = useState({})

    const newQuote = () => {
      fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then(data => 
          setData(data)
        )
    }

    useEffect(newQuote, [] )

  return (
    <div id='quote-box'>
        <h1 id='text'>{data.content}</h1>
        <p id='author'>{data.author}</p>
        <div className="buttons">
        <button id='new-quote' onClick={newQuote}>New Quote</button>
        <a id='tweet-quote' href="twitter.com/intent/tweet">Twiter</a>
        </div>
    </div>
  )
}

export default Card