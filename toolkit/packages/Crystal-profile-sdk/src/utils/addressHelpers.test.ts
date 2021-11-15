import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getPancrystalProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getPancrystalProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.crystalProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getPancrystalProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.crystalProfile[TESTNET_CHAIN_ID]);
  });
});
