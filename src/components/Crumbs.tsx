import { Group, Text } from '@mantine/core'

interface CrumbsProps {
  title: string
  week: string
}

function Crumbs({ title, week }: CrumbsProps) {
  return (
    <Group component="section">
      <Text c="dimmed">{title}</Text>
      <Text c="dimmed">/</Text>
      <Text fw={500}>Week {week}</Text>
    </Group>
  )
}

export default Crumbs
