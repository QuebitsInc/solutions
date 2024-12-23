import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
//@ts-ignore
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  senderDetails: string;
  senderPhone: string;
};

export default function ContactFormEmail({
  senderName,
  senderEmail,
  senderDetails,
  senderPhone,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Hr />
              <Text>The sender&apos;s full name is: {senderName}</Text>
              <Text>The sender&apos;s email is: {senderEmail}</Text>

              <Text>The sender&apos;s phone is: {senderPhone}</Text>
              <Text>The sender&apos;s message is: {senderDetails}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
