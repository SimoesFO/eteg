'use client'
import { revalidateUsers } from '@/app/actions/revalidate-users'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../Button'
import { useGlobalContext } from '../../context/UserProvider'
import { toast } from 'react-toastify'

const saveUserFormSchema = z.object({
  name: z.string()
    .nonempty('Nome Obrigatório'),
  cpf: z.string()
    .nonempty('CPF Obrigatório')
    .length(11, { message: 'CPF inválido' }),
  email: z.string()
    .nonempty('Email Obrigatório')
    .email('E-mail inválido'),
  color: z.string()
    .nonempty('Cor Obrigatória'),
  notes: z.string()
    .nonempty('Comentário Obrigatório')
})

type UserFormData = z.infer<typeof saveUserFormSchema>

export default function FormUser () {
  const { showForm, setShowForm } = useGlobalContext()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm<UserFormData>({
    resolver: zodResolver(saveUserFormSchema)
  })

  async function saveUser (data: UserFormData) {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    clearForm()

    await revalidateUsers()

    toast.success('😁 Usuário salvo com sucesso!', {
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

  function closeForm () {
    setShowForm(false)
    clearForm()
  }

  function clearForm () {
    resetField('name')
    resetField('cpf')
    resetField('email')
    resetField('color')
    resetField('notes')
  }

  return (
    <>
    {showForm &&
    <form onSubmit={handleSubmit(saveUser)}
      className='flex flex-col w-2/5 border rounded-md shadow-md p-4 gap-4'>
        <div className='flex items-center justify-between'>
          <span className='text-lg font-bold'>Criar Usuário </span>
          <button
            type='button'
            onClick={closeForm}
            className='flex items-center justify-center border w-6 h-6 rounded shadow hover:bg-zinc-100'>
              x
          </button>
        </div>

        <div className='flex flex-col gap-1'>
          <label>Informe seu nome:</label>
          <input
            type='text'
            placeholder='Nome'
            className='px-2 py-1 rounded-md border border-zinc-100 shadow'
            {...register('name')} />
          {errors.name && <span className='text-sm text-red-700 font-semibold px-2'>* {errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label>Informe seu CPF:</label>
          <input
            type='text'
            placeholder='CPF'
            className='px-2 py-1 rounded-md border border-zinc-100 shadow'
            {...register('cpf')} />
          {errors.cpf && <span className='text-sm text-red-700 font-semibold px-2'>* {errors.cpf.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label>Informe seu e-mail:</label>
          <input
            type='text'
            placeholder='E-mail'
            className='px-2 py-1 rounded-md border border-zinc-100 shadow'
            {...register('email')} />
          {errors.email && <span className='text-sm text-red-700 font-semibold px-2'>* {errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label>Informe sua cor favorita:</label>
          <input
            type='color'
            placeholder='CPF'
            className='px-2 py-1 rounded-md border border-zinc-100 shadow'
            {...register('color')} />
          {errors.color && <span className='text-sm text-red-700 font-semibold px-2'>* {errors.color.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label>Deixe seu comentário:</label>
          <textarea
            rows={5}
            placeholder='Comentário'
            className='px-2 py-1 rounded-md border border-zinc-100 shadow'
            {...register('notes')} />
          {errors.notes && <span className='text-sm text-red-700 font-semibold px-2'>* {errors.notes.message}</span>}
        </div>

        <div className='flex justify-end gap-8'>
          <Button.Root onClick={closeForm} className='bg-red-800 hover:bg-red-700'>
            Fechar
          </Button.Root>

          <Button.Root type='submit'>
            Salvar
          </Button.Root>
        </div>
    </form>
    }
    </>
  )
}
