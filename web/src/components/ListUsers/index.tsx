import TopicUser from './TopicUser'

interface User {
  id: string
  name: string
  cpf: string
  email: string
  color: string
  notes: string
  deleted: boolean
  created_at: string
  updated_at: string
}

async function getUsers (): Promise<User[]> {
  const response = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store',
    next: {
      tags: ['get-users']
    }
  })

  return await response.json()
}

export default async function ListUsers () {
  const users = await getUsers()
  return (
    <>
      {users.length === 0
        ? <div className='flex justify-center text-lg my-4'>Nenhum usuário cadastrado. 😢</div>
        : <div className='flex flex-col mt-4 divide-y-2'>
          {users.map(user => (
            <TopicUser
              key={user.id}
              id={user.id}
              name={user.name}
              cpf={user.cpf}
              email={user.email}
              color={user.color}
              notes={user.notes} />
          ))}
        </div>
      }
    </>
  )
}
