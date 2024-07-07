import Image from 'next/image'
import { AppShellHeader, Burger, Group, Text } from '@mantine/core'
import CDLogo from '@/assets/images/cd-logo.png'

interface HeaderProps {
  opened: boolean
  toggle: () => void
}

function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShellHeader bg="blue">
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Image priority={true} src={CDLogo} width={36} height={26} alt="Coding Dojo Logo" />
        <Text size="lg" fw={500}>
          WOS - Fathom Recordings
        </Text>
      </Group>
    </AppShellHeader>
  )
}

export default Header
