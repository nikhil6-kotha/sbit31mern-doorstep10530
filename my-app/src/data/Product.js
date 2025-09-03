import React from 'react'
import products from './products.json'
const xx = () => {
  return (
    <div>
      <ul>
        {products.map((prod) => (
          <li key={prod.product_name} style={{ marginBottom: "15px" }}>
            <h3>{prod.product_name}</h3>
           
            <p> {prod.image_url}</p>
            
            <p><strong>price:</strong> {prod.price}</p>
                        <p><strong>description:</strong> {prod.description}</p>
                        <p><strong>category:</strong> {prod.category}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default xx
