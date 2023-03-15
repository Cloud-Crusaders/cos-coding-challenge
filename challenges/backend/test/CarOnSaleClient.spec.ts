// tests/CarOnSaleClient.spec.ts
import { assert, it, describe } from "chai";
import { CarOnSaleClient } from "../src/app/services/CarOnSaleClient/classes/CarOnSaleClient";
 
describe("Calculator Tests", () => {
      
    it("should test the getRunningAuctions Test", async() => {
        const client = new CarOnSaleClient();
          const result = await client.getRunningAuctions();
          assert.equal(result.length, 5);
   });
});