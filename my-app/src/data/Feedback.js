import React from 'react'
import feedback from './feedback.json'
const Feedback = () => {
  return (
    <div>
      <ul>
        {feedback.map((feed) => (
          <li key={feed.feedback_id} style={{ marginBottom: "15px" }}>
            <p><strong>Feedback_id - </strong>{feed.feedback_id}</p>
            <p><strong>Product_id - </strong>{feed.product_id}</p>
            <p><strong>Rating - </strong>{feed.rating}</p>
            <p><strong>comment:</strong> {feed.comment}</p>
            <p><strong>date_submitted:</strong> {feed.date_submitted}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Feedback
