import { Recording } from '@/payload-types'
import { getTitle } from '@/utils/get-title'
import { SimpleGrid } from '@mantine/core'
import { PaginatedDocs } from 'payload'
import Crumbs from './Crumbs'
import RecordingCard from './RecordingCard'

interface WeekProps {
  recordings: PaginatedDocs<Recording>
  week: string
}

function Week({ recordings, week }: WeekProps) {
  const title = getTitle(Number(week))

  return (
    <section>
      <Crumbs title={title} week={week} />
      <SimpleGrid cols={{ sm: 1, lg: 3 }} component="section" py="md">
        {recordings.docs.map((recording) => (
          <RecordingCard key={recording.id} recording={recording} />
        ))}
      </SimpleGrid>
    </section>
  )
}

export default Week
