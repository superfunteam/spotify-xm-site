import Link from 'next/link'

import { CirclesBackground } from '@/components/CirclesBackground'
import { Logo } from '@/components/Logo'

export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <CirclesBackground
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
          />
                      <h1 className="text-center text-2xl font-medium tracking-tight text-cyan-400">
            {title}
          </h1>
          {subtitle && (
                          <p className="mt-3 text-center text-lg text-gray-300">{subtitle}</p>
          )}
        </div>
        <div className="-mx-4 mt-10 flex-auto bg-gray-900 px-4 py-10 shadow-2xl shadow-gray-950/50 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}
