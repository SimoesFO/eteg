'use client'
import { Button } from '@/components/Button'
import { useGlobalContext } from '@/context/UserProvider'

export default function ButtonNew () {
  const { setShowForm } = useGlobalContext()
  return (
    <Button.Root onClick={() => { setShowForm(true) }}>
      Novo
    </Button.Root>
  )
}
