import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Select an Image</h1>
      <Link to="/image/1"><button>Image 1</button></Link>
      <Link to="/image/2"><button>Image 2</button></Link>
      <Link to="/image/3"><button>Image 3</button></Link>
    </div>
  );
}

export default HomePage;
