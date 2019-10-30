import React from 'react';

export default function Header() {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src="/img/bg.jpg" alt="Netflix" />
        <a href="#" className="btn btn-rounded">
          Sign in
        </a>
      </div>
      <div className="showcase-content">
        <h1>See what's next</h1>
        <p>Watch anywhere. Cancel anytime</p>
        <a href="#" className="btn btn-xl">
          Watch Free For 30 Days
        </a>
      </div>
    </header>
  );
}
