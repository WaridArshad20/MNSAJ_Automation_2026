class Helpers {
    // 1. Random Email Generator
    static generateRandomEmail(baseEmail) {
        // warid@gmail.com -> warid+171294823@gmail.com
        const timestamp = Date.now(); 
        const parts = baseEmail.split('@');
        return `${parts[0]}+${timestamp}@${parts[1]}`;
    }

    // 2. Random 10-digit Phone Generator
    static generateRandomPhone() {
        
        const random9Digits = Math.floor(100000000 + Math.random() * 900000000);
        return `3${random9Digits}`;
    }
}

module.exports = { Helpers };