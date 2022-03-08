import React from 'react';

function WelcomeBanner() {
  return (
    <div className="bannerOne">
      <div className="bannerOne-innerOne">
        <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{color:"white"}}>Good afternoon, Welcome to M World!. 👋</h1>
        <p style={{color:"white"}}>Here is what’s happening with your projects today:</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;