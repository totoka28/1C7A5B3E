import Link from 'next/link'

export default function Page3() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="max-w-lg p-8 rounded-2xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-3">Oldal 3</h2>
        <p className="mb-4">Ez a harmadik oldal.</p>
        <div className="flex gap-3">
          <Link href="/page2" className="px-3 py-2 rounded-md border">Vissza a 2. oldalra</Link>
          <Link href="/" className="px-3 py-2 rounded-md border">Főoldal</Link>
        </div>
      </div>
    </main>
  )
}
