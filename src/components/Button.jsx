import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-gray-950 before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-black/10 active:bg-cyan-600 active:text-gray-950/80 before:transition-colors',
    white:
      'bg-gray-800 text-cyan-400 hover:bg-gray-700 active:bg-gray-900 active:text-cyan-400/80',
    gray: 'bg-gray-900 text-cyan-400 hover:bg-gray-800 active:bg-gray-950 active:text-cyan-400/80',
  },
  outline: {
    gray: 'border-gray-700 text-cyan-400 hover:border-cyan-500 active:bg-gray-900 active:text-cyan-300',
  },
}

export function Button({ className, ...props }) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
