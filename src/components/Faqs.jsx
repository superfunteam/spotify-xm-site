import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Is Spotify XM really completely free?',
      answer:
        'Yes! Spotify XM is 100% free with no ads, no subscription fees, and no hidden costs. We believe music should be accessible to everyone.',
    },
    {
      question: 'How is this different from other music streaming apps?',
      answer:
        'Unlike traditional streaming services, Spotify XM is open-source, offers radio-style discovery, has no ads, requires no subscriptions, and focuses on custom station creation rather than algorithm-driven playlists.',
    },
    {
      question: 'What devices does Spotify XM work with?',
      answer:
        'Spotify XM works with any device that supports Bluetooth - cars, headphones, speakers, smart TVs, and more. It\'s available on iOS and Android.',
    },
  ],
  [
    {
      question: 'How do custom stations work?',
      answer:
        'You can create stations based on artists, genres, or moods. Our system learns your preferences and plays similar music while discovering new artists that match your taste.',
    },
    {
      question: 'Can I contribute to the project?',
      answer:
        'Absolutely! Spotify XM is open-source. You can contribute code, report bugs, suggest features, or help with documentation on our GitHub repository.',
    },
    {
      question: 'How do you afford to keep this free?',
      answer:
        'We rely on voluntary contributions from our community and sponsor support. The entire project is run by volunteers who believe in free access to music.',
    },
  ],
  [
    {
      question: 'Will there be offline downloads?',
      answer:
        'Offline downloads are planned for a future release. We\'re working on implementing this feature while maintaining our commitment to free, open-source software.',
    },
    {
      question: 'How is my privacy protected?',
      answer:
        'We don\'t track your listening habits for advertising. All data is stored locally on your device, and we have no third-party analytics or data sharing.',
    },
    {
      question: 'Where can I get support?',
      answer:
        'Join our community Discord, check our GitHub discussions, or reach out through our support channels. Our community is very responsive and helpful.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-800 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
                          className="text-3xl font-medium tracking-tight text-cyan-400"
          >
            Frequently asked questions
          </h2>
                      <p className="mt-2 text-lg text-gray-300">
            If you have anything else you want to ask,{' '}
            <a
              href="https://github.com/your-username/spotify-xm/discussions"
              className="text-gray-900 underline"
            >
              join our community discussions
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
