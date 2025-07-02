export function Logomark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <rect width="40" height="40" rx="6" ry="6" fill="#00ff66"/>
      <path d="M10 16 C10 14, 12 12, 14 12 L26 12 C28 12, 30 14, 30 16 C30 18, 28 20, 26 20 L20 20 C18 20, 16 18, 16 16 C16 15.5, 16.5 15, 17 15 C17.5 15, 18 15.5, 18 16 C18 16.5, 18.5 17, 19 17 L25 17 C25.5 17, 26 16.5, 26 16 C26 15.5, 25.5 15, 25 15 L14 15 C12 15, 10 13, 10 16 Z M30 24 C30 26, 28 28, 26 28 L14 28 C12 28, 10 26, 10 24 C10 22, 12 20, 14 20 L20 20 C22 20, 24 22, 24 24 C24 24.5, 23.5 25, 23 25 C22.5 25, 22 24.5, 22 24 C22 23.5, 21.5 23, 21 23 L15 23 C14.5 23, 14 23.5, 14 24 C14 24.5, 14.5 25, 15 25 L26 25 C28 25, 30 27, 30 24 Z" fill="#2d4a2b"/>
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 180 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" />
      <text
        x="50"
        y="28"
        className="fill-gray-900 dark:fill-white"
        style={{ font: 'bold 16px Inter, sans-serif' }}
      >
        Spotify XM
      </text>
    </svg>
  )
}
