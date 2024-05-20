"use client"

import Image from "next/image";
import {
  Avatar,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  AlertDialog,
} from "@radix-ui/themes";

import {
  BookmarkIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";

import { Toaster, toast } from 'sonner';


export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Container size="1" className="mt-24">
        <Flex direction="column" gap="2" className="items-center">
          <Heading size="9" className="text-center">
            Hello! I'm <span style={{ color: "#E796F3" }}>Pulse</span>
          </Heading>
          <Text className="text-center text-gray-500">
            A moderation guilded bot. suited to protect your server! Pulse provides
            users with easy and customizable features.
          </Text>
          <Flex gap="2">
            <Button size="3" color="gray" variant="soft">
              Invite <ExternalLinkIcon />
            </Button>
            <Button size="3" color="gray" variant="soft">
              Support <ExternalLinkIcon />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}