import React from "react";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  return (
    <Container maxW={"1800px"} py={6}>
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Heading>StakeWell</Heading>

        {/* Connect Button */}
        <ConnectWallet />
      </Flex>
    </Container>
  );
}
