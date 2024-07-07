'use client'

import Link from 'next/link'
import { NavLink } from '@mantine/core'
import { usePathname } from 'next/navigation'
import { IconCalendarWeek } from '@tabler/icons-react'

interface WeekLinkProps {
  href: string
  label: string
}

function WeekLink({ href, label }: WeekLinkProps) {
  const path = usePathname()

  return (
    <NavLink
      href={href}
      label={label}
      component={Link}
      variant="filled"
      active={path === href}
      leftSection={<IconCalendarWeek stroke={1.5} color="white" />}
    />
  )
}

export default WeekLink
