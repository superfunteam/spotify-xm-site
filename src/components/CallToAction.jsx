import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#39ff14" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-cyan-400 sm:text-4xl">
            Start streaming music for free today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Download Spotify XM and experience unlimited radio-style music 
            streaming with custom stations, Bluetooth connectivity, and no 
            subscription fees. It's completely free forever.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreLink color="black" />
          </div>
        </div>
      </Container>
    </section>
  )
}
