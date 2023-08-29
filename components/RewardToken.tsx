import React from "react";
import { Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import { REWARD_TOKEN_ADDRESSES } from "../constants/addresses";

export default function RewardToken() {
  const address = useAddress();

  const { contract: stakeTokenContract, isLoading: loadingStakeToken } =
    useContract(REWARD_TOKEN_ADDRESSES);

  const { data: tokenBalance, isLoading: loadingTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  return (
    <Card p={5}>
      <Stack>
        <Heading>Reward Token</Heading>
        <Skeleton
          h={8}
          w={"50%"}
          isLoaded={!loadingStakeToken && !loadingTokenBalance}
        >
          <Text fontSize={"large"} fontWeight={"bold"} h={8}>
            ${tokenBalance?.displayValue} {tokenBalance?.symbol} 
          </Text>
        </Skeleton>
      </Stack>
    </Card>
  );
}
