'use client'
import { revalidateUsers } from '@/app/actions/revalidate-users'
import { Button } from '@/components/Button'
import { PaintBucket, UserMinus } from '@phosphor-icons/react'
import { toast } from 'react-toastify'

interface UserProps {
  id: string
  name: string
  cpf: string
  email: string
  color: string
  notes: string
}

export default function TopicUser ({ id, name, cpf, email, color, notes }: UserProps) {
  const cpfFormated = cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, '$1.$2.$3-$4')

  async function deleteUser (id: string) {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE'
    })

    await revalidateUsers()

    toast.success('👍 Usuário excluído com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      icon: false
    })

    return await response.json()
  }

  return (
    <div className='flex gap-4 items-center justify-between py-4'>
      <PaintBucket size={32} weight="fill" color={color} className='w-8' />

      <div className='flex flex-col w-1/4'>
        <span className='text-md font-bold'>{ name }</span>
        <span className='text-sm'>{ cpfFormated }</span>
        <span className='text-sm'>{ email }</span>
      </div>

      <div className='flex-1'> { notes}</div>

      <div>
        <Button.Root onClick={async () => await deleteUser(id)} className='bg-red-800 hover:bg-red-700'>
          <Button.Icon icon={UserMinus} />
          Excluir
        </Button.Root>
      </div>
    </div>
  )
}
