import { useId } from 'react'
import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-lg border border-gray-700 bg-gray-900 py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-gray-100 placeholder:text-gray-500 focus:border-cyan-500 focus:outline-hidden focus:ring-cyan-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
              className="mb-2 block text-sm font-semibold text-cyan-400"
    >
      {children}
    </label>
  )
}

export function TextField({ label, type = 'text', className, ...props }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ label, className, ...props }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
