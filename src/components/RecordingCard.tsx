import { Media, Recording } from '@/payload-types'
import { Card, CardSection, Image, Text, Title } from '@mantine/core'
import { format } from 'date-fns'
import NextImage from 'next/image'
import ViewButton from './ViewButton'

interface RecordingCardProps {
  recording: Recording
}

function RecordingCard({ recording }: RecordingCardProps) {
  const date = format(recording.date, 'MMMM d, yyyy')
  const time = format(recording.date, 'h:mmaaa')
  const image = recording.thumbnail as Media
  console.log(image.url)

  return (
    <Card component="article" shadow="md" padding="lg" radius="md" withBorder>
      <CardSection>
        <Image width={320} height={180} alt={image.alt} src={image.url} component={NextImage} />
      </CardSection>
      <Title order={2} my="lg">
        {recording.description}
      </Title>
      <Text>
        Week: {recording.week}, Day: {recording.day}
      </Text>
      <Text>
        Date: {date}, Time: {time}
      </Text>
      <ViewButton link={recording.link} />
    </Card>
  )
}

export default RecordingCard
