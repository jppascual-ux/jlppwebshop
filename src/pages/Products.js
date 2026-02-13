import React from 'react';

const Products = ({ addToCart }) => {
  const inventory = [
    { id: 1, name: "Prismatic Evolutions ETB", price: 69.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2bwkryJlHiKzQzA6I3QqplTAFhAVs_DZ2g&s" },
    { id: 2, name: "Black Bolt ETB", price: 50.00, img: "https://www.cardcaverntradingcards.com/cdn/shop/files/BlackBoltETBCode_600x600_crop_center.png?v=1752619666" },
    { id: 3, name: "Silver Tempest Booster Box", price: 120.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlN8Xxdlagpl-6KEb8clFIxrf0gFDqQQyKg&s" },
    { id: 4, name: "Die-Cast Replica Poké Ball", price: 99.99, img: "https://cdn.zatu.com/wp-content/uploads/2021/11/12094213/ZPAV-5060178520491.jpg" },
    { id: 5, name: "Seasonal Pikachu Plush", price: 24.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2q2qyAzfM_guPGGRlrBcjXyuSqufT_AjXBQ&s" },
    { id: 6, name: "9-Pocket Trainer Portfolio", price: 19.99, img: "https://m.media-amazon.com/images/I/51kqamIOZtL.jpg" }
  ];

  return (
    <>
      <h2>Trainer Supplies & Collectibles</h2>
      <div className="product-grid">
        {inventory.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <strong>${item.price.toFixed(2)}</strong><br /><br />
            <button className="animated-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;