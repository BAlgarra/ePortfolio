'use client';

import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';

const links = [
  // { link: '/about', label: 'About Me' },
  { link: '/research', label: 'Research' },
  { link: '/cv', label: 'CV' },
  {
    label: 'Other Stuff',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/demo', label: 'Book a demo' },
      { link: '/forums', label: 'Forums' },
    ],
  },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    // Dropdown group
    if ('links' in link && link.links) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <button type="button" className={classes.linkButton}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            {link.links.map((item) => (
              <Menu.Item key={item.link} component={Link} href={item.link}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    // Normal link
    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container fluid px="60">
        <div className={classes.inner}>
          <Link href="/" className={classes.brand}>
            Brandon Algarra
          </Link>

          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>
    </header>
  );
}
