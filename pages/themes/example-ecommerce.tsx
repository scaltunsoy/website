import { Box, Theme } from '@radix-ui/themes';
import { ExampleEcommerce } from '@components/themes/ExampleEcommerce';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme accentScale="gray" grayScale="sage" textColor="auto">
        <ExampleEcommerce />
      </Theme>
    </Box>
  );
}
