import React from 'react';
import './styles.css';

const CircleImages = () => {
  return (
    <div>
      {/* Image circulaire normale */}
      <img
        src="https://example.com/your-image.jpg"
        alt="Circle"
        className="circle-image"
      />

      {/* Image circulaire avec ombre */}
      <img
        src="https://example.com/your-image2.jpg"
        alt="Circle with shadow"
        className="circle-image circle-image-shadow"
      />

      {/* Image circulaire avec arrière-plan coloré */}
      <img
        src="https://example.com/your-image3.jpg"
        alt="Circle with background"
        className="circle-image circle-image-bg"
      />
    </div>
  );
};

export default CircleImages;
