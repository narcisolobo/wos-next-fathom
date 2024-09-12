import Week from '@/components/Week'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

interface WeekPageProps {
  params: { week: string }
}

async function WeekPage({ params: { week } }: WeekPageProps) {
  const payload = await getPayloadHMR({ config })
  const recordings = await payload.find({
    collection: 'recordings',
    sort: 'date',
    limit: 16,
    where: {
      week: {
        equals: Number(week),
      },
    },
  })

  return <Week recordings={recordings} week={week} />
}

export default WeekPage
