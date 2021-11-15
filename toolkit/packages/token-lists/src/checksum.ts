import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import crystalswapDefault from "./tokens/crystalswap-default.json";
import crystalswapExtended from "./tokens/crystalswap-extended.json";
import crystalswapTop100 from "./tokens/crystalswap-top-100.json";
import crystalswapTop15 from "./tokens/crystalswap-top-15.json";

const lists = {
  "crystalswap-default": crystalswapDefault,
  "crystalswap-extended": crystalswapExtended,
  "crystalswap-top-100": crystalswapTop100,
  "crystalswap-top-15": crystalswapTop15
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
