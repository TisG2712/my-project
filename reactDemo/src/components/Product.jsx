import React from 'react'

const Product = () => {

    const products = [
        {id: 1, name:"Laptop", price: 1500},
        {id: 2, name:"Phone", price: 1800},
        {id: 3, name:"Televison", price: 3500}
    ]
    
  return (
    <table border={1} cellPadding={8} style={{borderCollapse: "collapse"}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Television</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price.toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Product