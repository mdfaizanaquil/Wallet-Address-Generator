const { ethers } = require("ethers");

function generateWallet() {
    try {
        const wallet = ethers.Wallet.createRandom();

        console.log("\n✅ New Wallet Generated Successfully!");
        console.log("------------------------------------------------------------------");
        console.log(`Address:     ${wallet.address}`);
        console.log(`Private Key: ${wallet.privateKey}`);
        console.log("------------------------------------------------------------------");
        console.log("\n🚨 WARNING: Do NOT share your private key. Anyone with this key can access your funds.");
        console.log("This is for educational purposes. Use a hardware wallet for security.");

    } catch (error) {
        console.error("❌ Error generating wallet:", error.message);
    }
}

generateWallet();
