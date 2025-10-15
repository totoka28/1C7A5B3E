import Link from 'next/link'

export default function Page2() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="max-w-lg p-8 rounded-2xl shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-3">Oldal 2</h2>
        <p className="mb-4">Ez a második oldal.</p>
        <div className="flex gap-3">
          <Link href="/page1" className="px-3 py-2 rounded-md border">Vissza az 1. oldalra</Link>
          <Link href="/page3" className="px-3 py-2 rounded-md border">Tovább a 3. oldalra</Link>
        </div>
      </div>
    </main>
  )
}
