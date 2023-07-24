import FormUser from '../FormUser'
import ListUsers from '../ListUsers'
import { ContextProvider } from '../../context/UserProvider'
import ButtonNew from './ButtonNew'

export default function Body () {
  return (
    <ContextProvider>
      <div className="flex items-start justify-center p-4 gap-4">
          <div className="flex flex-col w-1/2 border rounded-md shadow-md p-4">
            <div className="flex items-center justify-between">
              <h1 className='text-xl font-bold'>Usuários </h1>
              <ButtonNew />
            </div>

            <ListUsers />
          </div>

          <FormUser />
      </div>
    </ContextProvider>
  )
}
