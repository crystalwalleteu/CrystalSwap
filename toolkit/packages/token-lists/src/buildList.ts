import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as crystalswapDefaultVersion } from "../lists/crystalswap-default.json";
import { version as crystalswapExtendedVersion } from "../lists/crystalswap-extended.json";
import { version as crystalswapTop15Version } from "../lists/crystalswap-top-15.json";
import { version as crystalswapTop100Version } from "../lists/crystalswap-top-100.json";
import crystalswapDefault from "./tokens/crystalswap-default.json";
import crystalswapExtended from "./tokens/crystalswap-extended.json";
import crystalswapTop100 from "./tokens/crystalswap-top-100.json";
import crystalswapTop15 from "./tokens/crystalswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "crystalswap-default": {
    list: crystalswapDefault,
    name: "CrystalSwap Default",
    keywords: ["crystalswap", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: crystalswapDefaultVersion,
  },
  "crystalswap-extended": {
    list: crystalswapExtended,
    name: "CrystalSwap Extended",
    keywords: ["crystalswap", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: crystalswapExtendedVersion,
  },
  "crystalswap-top-100": {
    list: crystalswapTop100,
    name: "CrystalSwap Top 100",
    keywords: ["crystalswap", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: crystalswapTop100Version,
  },
  "crystalswap-top-15": {
    list: crystalswapTop15,
    name: "CrystalSwap Top 15",
    keywords: ["crystalswap", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: crystalswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
