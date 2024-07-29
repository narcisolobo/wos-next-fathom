import { AppShellNavbar, NavLink } from '@mantine/core'
import { IconStack2 } from '@tabler/icons-react'
import Link from 'next/link'
import WeekLink from './WeekLink'

function Navbar() {
  return (
    <AppShellNavbar p="md" id="navbar">
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
      >
        <WeekLink href="/weeks/3" label="Week 3" />
        <WeekLink href="/weeks/4" label="Week 4" />
      </NavLink>
      <NavLink
        href="/"
        component={Link}
        label="C Sharp"
        leftSection={<IconStack2 stroke={1.5} color="white" />}
      >
        <WeekLink href="/weeks/5" label="Week 5" />
        <WeekLink href="/weeks/6" label="Week 6" />
      </NavLink>
    </AppShellNavbar>
  )
}

export default Navbar
