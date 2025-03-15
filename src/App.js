import { useEffect, useState } from 'react';

export default function DuckBuckWebsite() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "tokenomics", "trade"];
      let currentSection = "hero";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      {/* Floating Centered Navigation - Smaller and Adjusted for Mobile */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-full p-2 px-4 shadow-lg z-50 flex space-x-2 text-sm sm:text-base sm:space-x-4">
        <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }} className={`text-white hover:text-primary transition-all ${activeSection === "hero" ? "text-primary font-bold" : "opacity-50"}`}>Home</a>
        <a href="#story" onClick={(e) => { e.preventDefault(); document.getElementById('story').scrollIntoView({ behavior: 'smooth' }); }} className={`text-white hover:text-primary transition-all ${activeSection === "story" ? "text-primary font-bold" : "opacity-50"}`}>Story</a>
        <a href="#tokenomics" onClick={(e) => { e.preventDefault(); document.getElementById('tokenomics').scrollIntoView({ behavior: 'smooth' }); }} className={`text-white hover:text-primary transition-all ${activeSection === "tokenomics" ? "text-primary font-bold" : "opacity-50"}`}>Quackonomics</a>
        <a href="#trade" onClick={(e) => { e.preventDefault(); document.getElementById('trade').scrollIntoView({ behavior: 'smooth' }); }} className={`text-white hover:text-primary transition-all ${activeSection === "trade" ? "text-primary font-bold" : "opacity-50"}`}>Trade</a>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-extrabold text-primary">Duck Buck</h1>
          <p className="py-6 text-lg opacity-80">Base-Powered, Duck-Approved.</p>
          <button className="btn btn-primary btn-lg" onClick={() => document.getElementById('trade').scrollIntoView({ behavior: 'smooth' })}>
            Start Trading
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center p-10 rounded-lg shadow-lg pt-24">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">What is Duck Buck?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 p-6 shadow-md flex flex-col justify-between">
              <h3 className="text-sm font-bold text-primary uppercase">A Meme with Utility</h3>
              <p>Duck Buck started for fun, but quickly grew into a movement. It's a fun, community-driven token that embraces humor while pushing the boundaries of what meme coins can do.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md flex flex-col justify-between">
              <h3 className="text-sm font-bold text-primary uppercase">Powered by the Community</h3>
              <p>Every Duck Buck holder is part of the journey. No centralized control, no big corporations—just a decentralized flock of people making waves together.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md flex flex-col justify-between">
              <h3 className="text-sm font-bold text-primary uppercase">Quackonomics</h3>
              <p>With fair distribution, no hidden fees, and a supply designed to keep things interesting, Duck Buck thrives on transparency and participation.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md flex flex-col justify-between">
              <h3 className="text-sm font-bold text-primary uppercase">More Than Just a Coin</h3>
              <p>Duck Buck isn't just about trading—it's about culture, creativity, and having a blast while being part of something bigger.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Tokenomics Section */}
      <section id="tokenomics" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-center p-10 rounded-lg shadow-lg pt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-left">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-5xl font-bold">$DBX Quackonomics</h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="stats bg-base-100 border border-base-300 p-6 rounded-lg shadow-xl">
              <div className="stat">
                <div className="stat-title">Current Supply</div>
                <div className="stat-value">100,000</div>
              </div>
            </div>
            <div className="stats bg-base-100 border border-base-300 p-6 rounded-lg shadow-xl">
              <div className="stat">
                <div className="stat-title">Circulating Supply</div>
                <div className="stat-value">50,000</div>
              </div>
            </div>
            <div className="stats bg-base-100 border border-base-300 p-6 rounded-lg shadow-xl">
              <div className="stat">
                <div className="stat-title">Buy / Sell Tax</div>
                <div className="stat-value">0%</div>
              </div>
            </div>
            <div className="stats bg-base-100 border border-base-300 p-6 rounded-lg shadow-xl">
              <div className="stat">
                <div className="stat-title">Minting Schedule</div>
                <div className="stat-value">TBD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

           {/* How to Trade Section */}
           <section id="trade" className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center p-10 rounded-lg shadow-lg pt-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">How to Buy Duck Bucks ($DBX)</h2>
          <div className="space-y-6 text-left">
            <div className="card bg-base-100 p-6 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase">Step 1: Set Up MetaMask</h3>
              <p>Download and install <a href="https://metamask.io" className="text-primary underline">MetaMask</a>. Create a new wallet and securely store your Secret Recovery Phrase.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase">Step 2: Add Base Network</h3>
              <p>Open MetaMask, go to settings, and manually add the Base network with the following details:</p>
              <ul className="list-disc list-inside mt-2">
                <li><strong>Network Name:</strong> Base</li>
                <li><strong>RPC URL:</strong> https://mainnet.base.org/</li>
                <li><strong>Chain ID:</strong> 8453</li>
                <li><strong>Currency Symbol:</strong> ETH</li>
                <li><strong>Block Explorer:</strong> <a href="https://basescan.org" className="text-primary underline">BaseScan</a></li>
              </ul>
            </div>
            <div className="card bg-base-100 p-6 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase">Step 3: Fund Your Wallet</h3>
              <p>You need ETH on Base to trade $DBX. Transfer ETH from another Base wallet or use a bridge to move funds from Ethereum.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase">Step 4: Swap ETH for $DBX on Uniswap</h3>
              <p>Go to <a href="https://app.uniswap.org/explore/tokens/base/0x1a07a18c1636348b46837660b250cabbf9b129ce" className="text-primary underline">Uniswap</a>, connect your wallet, and swap ETH for $DBX. Be sure to leave some ETH for gas fees.</p>
            </div>
            <div className="card bg-base-100 p-6 shadow-md">
              <h3 className="text-sm font-bold text-primary uppercase">Step 5: Add $DBX to MetaMask</h3>
              <p>If $DBX doesn’t appear in your wallet, manually add the token:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Click "Import Tokens" in MetaMask</li>
                <li>Paste the $DBX contract address: <strong>0x1a07a18c1636348b46837660b250cabbf9b129ce</strong></li>
                <li>Click "Add Custom Token"</li>
              </ul>
            </div>
            </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold">Need help? <a href="https://discord.gg/TBUucjxS7C" className="text-primary underline">Join the community on Discord!</a> 🚀</p>
          </div>
        </div>
      </section>
    </div>
  );
}
