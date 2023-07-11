import { Box, Theme } from '@radix-ui/themes';
import { ExampleDashboard } from '@components/themes/ExampleDashboard';
import '@radix-ui/themes/dist/index.css';
import * as React from 'react';

export default function ExamplePage() {
  return (
    <Box asChild p="9">
      <Theme grayScale="mauve">
        <ExampleDashboard />
      </Theme>
    </Box>
  );
}
