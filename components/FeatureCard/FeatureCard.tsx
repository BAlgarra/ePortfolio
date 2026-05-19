'use client';

import {
  IconCode,
  IconDatabase,
  IconUsers,
} from '@tabler/icons-react';
import {
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './FeatureCard.module.css';

const researchCards = [
  {
    title: 'RNAMotifContrastWebService',
    description:
      'A web-based interface for visually comparing RNA structures using Next.js, React, and Babylon.js.',
    icon: IconDatabase,
  },
  {
    title: 'Roomie',
    description:
      'A roommate management app with shared calendars, task tracking, and expense management.',
    icon: IconUsers,
  },
  {
    title: 'Public Agenda',
    description:
      'A civic platform that makes local government meetings easier to access through summaries, transcripts, and AI chat.',
    icon: IconCode,
  },
];

const paragraphs = [
  `My first introduction to research began through the Undergraduate Research Opportunity Program at CSUMB, where I worked under Dr. Islam to develop and deploy a web-based interface for RNAMotifContrast, a computational tool used to visually compare RNA structures.`,

  `My primary role focused on designing an accessible and user-friendly front-end platform that allows researchers to upload structural data, process it through a backend system, and receive interactive visual results directly in the browser.`,

  `This experience showed me how computer science can contribute meaningfully to other disciplines. By transforming specialized computational biology tools into a browser-based service, our work reduced technical barriers and expanded accessibility for researchers.`,

  `In addition to technical contributions, I collaborated closely with researchers and alumni to ensure compatibility between the front-end interface and backend analysis pipeline. This required clear communication, documentation, and teamwork.`,

  `Looking ahead, I aim to pursue graduate studies that deepen my expertise in software engineering while expanding into data science and machine learning, especially computational applications in biology such as viral structures and genomic data.`,

  `My long-term goal is to work in software engineering roles that foster innovation and collaboration while continuing to contribute to research and open-source initiatives.`,
];

export function FeaturesCard() {
  const features = researchCards.map((feature) => (
    <Card
      key={feature.title}
      shadow="sm"
      radius="lg"
      padding="xl"
      className={classes.card}
      withBorder
    >
      <ThemeIcon size={52} radius="md" variant="light">
        <feature.icon size={28} stroke={1.7} />
      </ThemeIcon>

      <Text fz="lg" fw={700} mt="md">
        {feature.title}
      </Text>

      <Text fz="sm" c="dimmed" mt="sm" lh={1.7}>
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py={80}>
      <Card shadow="sm" radius="xl" padding="xl" withBorder>
        <Group justify="center">
          <Text size="sm" fw={700} tt="uppercase" c="blue">
            Research & Experience
          </Text>
        </Group>

        <Title order={2} ta="center" mt="sm">
          Building accessible tools through software and research
        </Title>

        <Text c="dimmed" ta="center" mt="md" maw={760} mx="auto" lh={1.7}>
          My work focuses on interdisciplinary software, computational biology,
          collaborative problem-solving, and tools that make information more
          accessible.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={40}>
          {features}
        </SimpleGrid>
      </Card>

      <Card shadow="sm" radius="xl" padding="xl" withBorder mt="xl">
        <Title order={3} mb="lg">
          Research Journey
        </Title>

        {paragraphs.map((paragraph, index) => (
          <Text key={index} c="dimmed" lh={1.8} mb="md">
            {paragraph}
          </Text>
        ))}
      </Card>
    </Container>
  );
}