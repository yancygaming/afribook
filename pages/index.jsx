import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-4 rounded shadow max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Karibu kwenye AfriBook</h1>
        <p className="text-gray-700 mb-4">Jisajili au ingia ili uanze kutumia AfriBook.</p>
        <div className="flex space-x-4">
          <Link href="/signup"><a className="bg-blue-500 text-white px-4 py-2 rounded">Jisajili</a></Link>
          <Link href="/login"><a className="bg-gray-500 text-white px-4 py-2 rounded">Ingia</a></Link>
        </div>
      </div>
    </div>
  )
}