import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.crystalswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.crystalswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://crystalswap.info",
      },
      {
        label: "Tokens",
        href: "https://crystalswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://crystalswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://crystalswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.crystalswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/crystalswap",
      },
      {
        label: "Docs",
        href: "https://docs.crystalswap.finance",
      },
      {
        label: "Blog",
        href: "https://crystalswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/crystalswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancrystalSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancrystalSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancrystalSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/crystalswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/crystalswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/crystalswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancrystalSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancrystalswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/crystalswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/crystalswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancrystalSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/PancrystalSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/crystalswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
