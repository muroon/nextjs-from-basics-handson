import React from 'react';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>Next.js Project</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;