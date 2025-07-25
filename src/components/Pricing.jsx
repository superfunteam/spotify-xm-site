'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Free Forever',
    featured: true,
    price: { Monthly: '$0', Annually: '$0' },
    description:
      'Everything you need for unlimited music streaming. No ads, no limits, no subscription fees.',
    button: {
      label: 'Download for free',
      href: '#',
    },
    features: [
      'Unlimited music streaming',
      'Custom radio stations',
      'Bluetooth connectivity',
      'High-quality audio (320kbps)',
      'No advertisements',
      'Open source code',
      'Community support',
      'Regular updates',
    ],
    logomarkClassName: 'fill-cyan-500',
  },
  {
    name: 'Contribute',
    featured: false,
    price: { Monthly: 'Voluntary', Annually: 'Voluntary' },
    description:
      'Help support development and server costs with voluntary contributions. Same features, just helping the community.',
    button: {
      label: 'Support the project',
      href: 'https://github.com/your-username/spotify-xm',
    },
    features: [
      'All free features included',
      'Support open source development',
      'Help cover server costs',
      'Priority feature requests',
      'Special contributor badge',
      'Early beta access',
      'Direct developer contact',
    ],
    logomarkClassName: 'fill-green-500',
  },
  {
    name: 'Developer',
    featured: false,
    price: { Monthly: 'Open Source', Annually: 'Open Source' },
    description:
      'Want to contribute code? Join our open-source community and help build the future of free music streaming.',
    button: {
      label: 'View on GitHub',
      href: 'https://github.com/your-username/spotify-xm',
    },
    features: [
      'Full source code access',
      'Development documentation',
      'Contribution guidelines',
      'Code review process',
      'Developer community Discord',
      'Technical support',
      'Feature development roadmap',
    ],
    logomarkClassName: 'fill-gray-500',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
                      featured ? 'order-first bg-gray-950 lg:order-none' : 'bg-gray-900',
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-cyan-400' : 'text-cyan-500',
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-cyan-400' : 'text-cyan-500',
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 opacity-0 select-none',
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute top-0 left-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 opacity-0 select-none',
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700',
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-gray-800 text-gray-300'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                                      featured ? 'text-cyan-300' : 'text-cyan-400',
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'cyan' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-t border-gray-800 bg-gray-950 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-cyan-400"
          >
            Free music streaming, always.
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            No subscription fees, no ads, no limitations. Choose how you want 
            to support the open-source music streaming revolution.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
          ))}
        </div>
      </Container>
    </section>
  )
}
