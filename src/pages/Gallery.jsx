import React from 'react';

const Gallery = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-3 gap-4">
      {/* Replace with dynamic content */}
      <img src="/path/to/image1.jpg" alt="Gallery Item 1" />
      <img src="/path/to/image2.jpg" alt="Gallery Item 2" />
      <img src="/path/to/image3.jpg" alt="Gallery Item 3" />
    </div>
  </div>
);

export default Gallery;
