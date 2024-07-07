import Link from 'next/link'
import { AppShellNavbar, NavLink } from '@mantine/core'
import { IconStack2 } from '@tabler/icons-react'
import WeekLink from './WeekLink'

function Navbar() {
  return (
    <AppShellNavbar p="md">
      <NavLink
        href="/"
        component={Link}
        label="Programming Basics"
        leftSection={<IconStack2 stroke={1.5} color="white" />}
        childrenOffset={28}
      >
        <WeekLink href="/weeks/1" label="Week 1" />
        <WeekLink href="/weeks/2" label="Week 2" />
      </NavLink>
      <NavLink
        href="/"
        component={Link}
        label="Web Fundamentals"
        leftSection={<IconStack2 stroke={1.5} color="white" />}
      />
    </AppShellNavbar>
  )
}

export default Navbar
