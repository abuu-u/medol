import { cn } from '@/shared/utils'
import '@/styles/globals.scss'
import { Montserrat, Roboto_Flex } from 'next/font/google'

const roboto_flex = Roboto_Flex({
  subsets: ['latin', 'cyrillic'],
  variable: '--roboto',
})
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--montserrat',
})

export const metadata = {
  title: 'Medol',
  description:
    'Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={cn(roboto_flex.variable, montserrat.variable)}>
        {children}
      </body>
    </html>
  )
}
