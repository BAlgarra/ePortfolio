'use client';

import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeatureCard.module.css';

const researchCards = [
  {
    title: 'RNAMotifContrastWebService',
    description:
      'A web-based interface for RNAMotifContrast, a computational tool used to visually compare RNA structures. This project significantly reduces the technical and financial barriers associated with specialized computational biology tools, enabling researchers to analyze RNA structures directly through a browser. Built in Next.js for the front-end and using Babylon.js for interactive 3D visualization.  ',
    icon: IconGauge,
  },
  {
    title: 'Roomie',
    description:
      'An application for roomates to manage their shared living space. It includes features such as a shared calendar, task management, and expense tracking. Built in React Native for web and mobile platforms.',
    icon: IconUser,
  },
  {
    title: 'Public Agenda',
    description:
      'An application to collect publically available data on local government meetings and make it easily accessible to the public. We provide generated meeting summaries, transcription with timestamps, interactive AI chat window, .',
    icon: IconCookie,
  },
];

export function FeaturesCard() {
  const theme = useMantineTheme();
  const features = researchCards.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Research Interest and Experience
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
       My first introduction to research began through the Undergraduate Research Opportunity Program (UROC) at CSUMB, where I worked under Dr. Islam to develop and deploy a web-based interface for RNAMotifContrast, a computational tool used to visually compare RNA structures.
My primary role focused on designing an accessible and user-friendly front-end platform that allows researchers to upload structural data, process it through a backend system, and receive interactive visual results directly in the browser. Using modern web technologies such as Next.js and React, I contributed to building a system that significantly reduces the technical and financial barriers associated with specialized computational biology tools.
Previously, many of these tools required complex installations, expensive hardware, subscriptions, or specialized local environments. By transforming this process into a web-based service, our work enables researchers to analyze RNA structures directly through a browser, expanding accessibility to a broader scientific community.
This experience demonstrated how computer science can extend far beyond traditional applications and contribute meaningfully to other disciplines. Presenting our work at a symposium further reinforced the real-world impact of developing accessible research tools. It showed me that software development plays a critical role in advancing scientific discovery by enabling computation, visualization, and data analysis across fields.
In addition to technical contributions, I collaborated closely with researchers and alumni to ensure compatibility between the front-end interface and backend analysis pipeline. This required clear communication, documentation, and teamwork. I also contributed to preparing materials that allow future students to continue improving the system, ensuring the sustainability and growth of the project.
These experiences have also shaped my approach to leadership and mentorship. As a teaching assistant and team member in collaborative environments, I have learned that effective leadership is rooted in support, guidance, and inclusivity. Whether assisting students during office hours or solving complex problems with teammates, I prioritize creating environments where individuals feel encouraged to share ideas and contribute.
Looking ahead, I aim to pursue graduate studies that deepen my expertise in software engineering, while expanding into data science and machine learning. I am particularly interested in computational applications in biology, such as analyzing viral structures and genomic data. As biological datasets continue to grow in complexity, I believe scalable software systems and intelligent algorithms will play a critical role in future scientific breakthroughs.
My long-term goal is to work in software engineering roles that foster innovation and collaboration while continuing to contribute to research and open-source initiatives. By bridging industry, academia, and research communities, I hope to build tools that make scientific knowledge more accessible and impactful.
Ultimately, my journey from navigating early academic uncertainty, to contributing to interdisciplinary research, has reinforced my belief that collaboration drives both education and innovation. I aspire to contribute to environments where diverse perspectives come together to create meaningful advancements for society.

      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}