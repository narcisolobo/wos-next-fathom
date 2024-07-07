'use client'

import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Header from './Header'
import Navbar from './Navbar'

interface ShellProps {
  children: React.ReactNode
}

function Shell({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default Shell
