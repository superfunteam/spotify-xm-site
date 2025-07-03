import Image from 'next/image'

export function Logomark({ className, ...props }) {
  return (
    <Image
      src="/logo.png"
      alt="Spotify XM Logo"
      width={40}
      height={40}
      className={className}
      {...props}
    />
  )
}

export function Logo({ className, ...props }) {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`} {...props}>
      <Image
        src="/logo.png"
        alt="Spotify XM Logo"
        width={40}
        height={40}
      />
      <span className="text-lg font-bold text-gray-900 dark:text-white">
        Spotify XM
      </span>
    </div>
  )
}
