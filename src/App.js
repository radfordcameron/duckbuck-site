import { useState } from "react";
import { Wallet, ShieldCheck, Bell } from "lucide-react";
import "./App.css"; // Import styles for this component

export default function ComingSoon() {
  return (
    <div className="card">
      <h1>🚀 The Duck Buck Website is Coming Soon!</h1>
      <p>
        You can buy and trade Duck Bucks on <strong>Uniswap</strong>! Use <strong> MetaMask Wallet</strong> and connect it to Uniswap to easily trade Duck Buck.
      </p>
      
      <div className="icon-container">
        <Wallet size={50} color="blue" />
        <ShieldCheck size={50} color="green" />
        <Bell size={50} color="yellow" />
      </div>

      <p>Stay tuned for more updates!</p>
    </div>
  );
}
