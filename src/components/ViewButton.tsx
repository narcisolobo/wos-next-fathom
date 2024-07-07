'use client'

import { Button } from '@mantine/core'

interface ViewButtonProps {
  link: string
}

function ViewButton({ link }: ViewButtonProps) {
  const handleClick = () => {
    window.open(link, '_blank')
  }

  return (
    <Button mt="md" onClick={handleClick}>
      View Recording
    </Button>
  )
}

export default ViewButton
