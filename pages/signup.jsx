import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const router = useRouter()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('/api/signup', form)
    router.push('/login')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Jisajili</h2>
      <input name="name" onChange={handleChange} placeholder="Jina" className="border p-2 w-full mb-2" />
      <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-2" />
      <input name="password" type="password" onChange={handleChange} placeholder="Nenosiri" className="border p-2 w-full mb-4" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Tuma</button>
    </form>
  )
}