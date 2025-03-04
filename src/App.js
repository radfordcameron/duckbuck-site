import { useState } from "react";
import { Wallet, ShieldCheck, Bell } from "lucide-react";
import "./App.css"; // Import styles for this component

export default function DuckBuckWebsite() {
  return (
    <div>
      {/* Navigation Menu */}
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#how-to-buy">How to Buy</a></li>
        </ul>
      </nav>

      {/* Home / Social Media Section */}
      <section id="home" className="section home full-screen responsive">
        <div className="content">
          <h1>🚀 Welcome to DuckBuck!</h1>
          <p>Follow us on social media and stay updated.</p>
          <div className="icon-container">
            <Wallet size={50} color="blue" />
            <ShieldCheck size={50} color="green" />
            <Bell size={50} color="yellow" />
          </div>
        </div>
      </section>
      
      {/* Tokenomics Section */}
      <section id="tokenomics" className="section tokenomics full-screen responsive">
        <div className="content">
          <h2>💰 Tokenomics</h2>
          <p>Understand the supply, distribution, and economics of DuckBuck.</p>
          <ul>
            <li>🔹 Total Supply: 1,000,000,000 DUB</li>
            <li>🔹 Liquidity Pool: 50%</li>
            <li>🔹 Development Fund: 20%</li>
            <li>🔹 Community Rewards: 20%</li>
            <li>🔹 Marketing: 10%</li>
          </ul>
        </div>
      </section>
      
      {/* How to Buy Section */}
      <section id="how-to-buy" className="section how-to-buy full-screen responsive">
        <div className="content">
          <h2>🛒 How to Buy DuckBuck</h2>
          <p>Follow these steps to get DuckBuck in your wallet:</p>
          <ol>
            <li>1️⃣ Install Coinbase Wallet or MetaMask.</li>
            <li>2️⃣ Add the DuckBuck contract address.</li>
            <li>3️⃣ Swap ETH for DuckBuck on Uniswap.</li>
            <li>4️⃣ Hold and enjoy the ride! 🚀</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
