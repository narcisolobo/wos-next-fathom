'use client'

import { NavLink } from '@mantine/core'
import { IconCalendarWeek } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
