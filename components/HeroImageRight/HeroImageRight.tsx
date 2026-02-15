import { Button, Container, Text, Title } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
   
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Welcome to my ePortfolio!
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              Hello, my name is Brandon Algarra, and I'm an undergraduate student majoring in Computer Science at CSUMB. Take a look around and find out what I'm all about!
            </Text>

            {/* <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button> */}
          </div>
        </div>
      
    </div>
  );
}