import React from "react";
import { Container, Flex, Heading, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container maxW={"1800px"} py={6}>
      <Flex direction={"row"} justifyContent={"center"}>
        <Heading>Made with ❤️ by </Heading>
        <Heading pl={3}>
          <Link href="https://mrinmoy.live/" color="teal.500">
            Mrinmoy Porel
          </Link>
        </Heading>
      </Flex>
    </Container>
  );
}
