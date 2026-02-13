import React from 'react';

const Home = () => {
  const featured = [
    { id: 1, name: "Prismatic Evolutions ETB", price: 69.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2bwkryJlHiKzQzA6I3QqplTAFhAVs_DZ2g&s" },
    { id: 2, name: "Black Bolt ETB", price: 50.00, img: "https://www.cardcaverntradingcards.com/cdn/shop/files/BlackBoltETBCode_600x600_crop_center.png?v=1752619666" },
    { id: 3, name: "White Flare ETB", price: 50.00, img: "https://m.media-amazon.com/images/I/81eAHAIDVrL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg" }
  ];

  return (
    <>
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featured.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <strong>${product.price.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;