'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Finally, truly free music streaming!',
    body: 'I\'ve been using Spotify XM for months and haven\'t seen a single ad. The custom stations are amazing and it works perfectly with my car\'s Bluetooth.',
    author: 'MusicLover2024',
    rating: 5,
  },
  {
    title: 'Open source music streaming done right.',
    body: 'As a developer, I love that I can see exactly how Spotify XM works. No hidden algorithms, no data tracking, just pure music streaming.',
    author: 'CodeAndBeats',
    rating: 5,
  },
  {
    title: 'Better than the paid services.',
    body: 'Switched from a $10/month service to Spotify XM and honestly, the radio-style discovery is better than any algorithm I\'ve tried.',
    author: 'FrugalMelody',
    rating: 5,
  },
  {
    title: 'Perfect for my daily commute.',
    body: 'The Bluetooth connectivity is seamless and the custom stations keep my 45-minute commute interesting every single day.',
    author: 'CommuterTunes',
    rating: 5,
  },
  {
    title: 'Contributing to open source music!',
    body: 'I\'ve contributed code to Spotify XM and it\'s amazing to see how responsive the community is. This is the future of music streaming.',
    author: 'OpenSourceFan',
    rating: 5,
  },
  {
    title: 'High quality audio for free.',
    body: 'The 320kbps quality is crystal clear and rivals any premium service. Can\'t believe this is completely free.',
    author: 'AudioPhile',
    rating: 5,
  },
  {
    title: 'Great for discovering new music.',
    body: 'The radio-style playback has introduced me to so many new artists. Much better than repetitive playlists.',
    author: 'DiscoveryQueen',
    rating: 5,
  },
  {
    title: 'Works everywhere.',
    body: 'From my headphones to my smart speakers to my car - Spotify XM connects to everything seamlessly.',
    author: 'TechNomad',
    rating: 5,
  },
  {
    title: 'No more subscription fatigue.',
    body: 'After canceling multiple music subscriptions, finding Spotify XM was like finding a treasure. Free forever!',
    author: 'BudgetBeats',
    rating: 5,
  },
  {
    title: 'Love the community aspect.',
    body: 'Being able to contribute to an open-source music app and help shape its future is incredibly rewarding.',
    author: 'CommunityBuilder',
    rating: 5,
  },
  {
    title: 'Student-friendly streaming.',
    body: 'As a broke college student, Spotify XM is a lifesaver. High-quality music streaming without breaking the bank.',
    author: 'CollegeLife',
    rating: 5,
  },
  {
    title: 'Perfect replacement for satellite radio.',
    body: 'Cancelled my SiriusXM subscription and switched to Spotify XM. Better music discovery and it\'s completely free.',
    author: 'FormerSatelliteUser',
    rating: 5,
  },
  {
    title: 'Transparent and trustworthy.',
    body: 'No hidden fees, no data harvesting, no secret algorithms. Just honest, open-source music streaming.',
    author: 'PrivacyAdvocate',
    rating: 5,
  },
  {
    title: 'Battery life is amazing.',
    body: 'Unlike other streaming apps, Spotify XM doesn\'t drain my phone battery. Efficient coding shows.',
    author: 'PowerUser',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['&quot;'] after:content-['&quot;']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Music lovers are discovering Spotify XM.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people are enjoying free, unlimited music streaming 
          with custom stations and Bluetooth connectivity.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
