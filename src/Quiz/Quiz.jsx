import React from 'react'

const Quiz = () => {
  return (
    <div className='container'>
        <h2>Which device is required for the Internet connection?</h2>
        
        <hr />

        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>Lan Cable</li>
            <li>Pen Drive</li>
        </ul>

        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
    
  )
}

export default Quiz