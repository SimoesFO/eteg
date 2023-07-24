'use client'
import { Button } from '@/components/Button'
import { useGlobalContext } from '@/context/UserProvider'
import { UserPlus } from '@phosphor-icons/react'

export default function ButtonNew () {
  const { setShowForm } = useGlobalContext()
  return (
    <Button.Root onClick={() => { setShowForm(true) }}>
      <Button.Icon icon={UserPlus} />
      Novo
    </Button.Root>
  )
}
