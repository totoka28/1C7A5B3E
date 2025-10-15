import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-xl p-8 rounded-2xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-4">Főoldal — App Router (TSX)</h1>
        <p className="mb-6">Innen elérheted az 1., 2. és 3. oldalt.</p>
        <div className="flex gap-3">
          <Link href="/page1" className="px-4 py-2 rounded-lg border hover:bg-slate-50">1. oldal</Link>
          <Link href="/page2" className="px-4 py-2 rounded-lg border hover:bg-slate-50">2. oldal</Link>
          <Link href="/page3" className="px-4 py-2 rounded-lg border hover:bg-slate-50">3. oldal</Link>
        </div>
      </div>
    </main>
  )
}
