const base = require('@playwright/test');
const { POManager } = require('../pages/POManager');

// Extend the base test to include the poManager fixture
exports.test = base.test.extend({
    poManager: async ({ page }, use) => {
        const poManager = new POManager(page);
        await use(poManager);
    }
});

exports.expect = base.expect;