import Body from '../components/Body'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home () {
  return (
    <main className="h-screen flex flex-col bg-zinc-50">
      <Header />
      <Body />
      <ToastContainer />
    </main>
  )
}
