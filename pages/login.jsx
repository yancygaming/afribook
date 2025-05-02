import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const router = useRouter()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await axios.post('/api/login', form)
    localStorage.setItem('token', res.data.token)
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Ingia</h2>
      <input name="email" onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-2" />
      <input name="password" type="password" onChange={handleChange} placeholder="Nenosiri" className="border p-2 w-full mb-4" />
      <button className="bg-gray-700 text-white px-4 py-2 rounded">Ingia</button>
    </form>
  )
}