// pages/index.js

import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Home</h1>
    <p>This is the Home page.</p>
    <Link href="/about">About Page</Link>
  </div>
);

export default Index;