import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2023 My Blog</p>
      </footer>
    </div>
  );
};

export { Layout };
