import React from "react";
import styled from "styled-components";
import { PancrystalRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  crystalPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ crystalPriceUsd }) => {
  return crystalPriceUsd ? (
    <PriceLink
      href="https://exchange.crystalswap.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <PancrystalRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${crystalPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
