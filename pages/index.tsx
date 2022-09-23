import { AppBar } from '@components/AppBar';
import { MenuTabs } from '@components/MenuTabs';
import { AppShell, Header } from '@mantine/core';

export default function HomePage() {
  return (
    <AppShell
      fixed
      header={
        <Header height={60}>
          <AppBar />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        },
      })}
    >
      <MenuTabs />
    </AppShell>
  );
}
