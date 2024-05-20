import Image from "next/image";
import { Container, Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="1">
        <Flex direction="column">
          <Heading>Hello! I'm Pulse</Heading>
          <Text color="gray">A moderation guilded bot.</Text>
        </Flex>
      </Container>
    </main>
  );
}
