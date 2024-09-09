import { Recording } from '@/payload-types'
import { Card, CardSection, Image, Stack, Text, Title } from '@mantine/core'
import { format } from 'date-fns'
import { toZonedTime, formatInTimeZone } from 'date-fns-tz'
import NextImage from 'next/image'
import ViewButton from './ViewButton'

interface RecordingCardProps {
  recording: Recording
}

async function RecordingCard({ recording }: RecordingCardProps) {
  const date = format(recording.date, 'MMMM d, yyyy')
  const time = formatInTimeZone(recording.date, 'America/Los_Angeles', 'h:mmaaa')
  const imagekitId = process.env.IMAGEKIT_ID

  return (
    <Card component="article" shadow="md" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image
          width={320}
          height={180}
          alt={recording.description}
          src={`https://ik.imagekit.io/${imagekitId}/wos/${recording.image}`}
          component={NextImage}
        />
      </CardSection>
      <Stack justify="space-between" pt="md" style={{ height: '100%' }}>
        <Title order={2}>{recording.description}</Title>
        <Stack gap="sm">
          <Text>
            Week: {recording.week}, Day: {recording.day}
            <br />
            Date: {date}, Time: {time}
          </Text>
          <ViewButton link={recording.link} />
        </Stack>
      </Stack>
    </Card>
  )
}

export default RecordingCard
