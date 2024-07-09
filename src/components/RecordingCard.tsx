import { Recording } from '@/payload-types'
import { Card, CardSection, Image, Stack, Text, Title } from '@mantine/core'
import { format } from 'date-fns'
import NextImage from 'next/image'
import ViewButton from './ViewButton'

interface RecordingCardProps {
  recording: Recording
}

async function RecordingCard({ recording }: RecordingCardProps) {
  const date = format(recording.date, 'MMMM d, yyyy')
  const time = format(recording.date, 'h:mmaaa')
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
      \<Title order={2}>{recording.description}</Title>
      <div>
        <Text>
          Week: {recording.week}, Day: {recording.day}
        </Text>
        <Text>
          Date: {date}, Time: {time}
        </Text>
      </div>
      <ViewButton link={recording.link} />
    </Card>
  )
}

export default RecordingCard
