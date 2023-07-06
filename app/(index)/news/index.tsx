'use client'

import Button from '@/common/button'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, PropsWithChildren, useCallback } from 'react'
import news1 from './news-1.png'
import styles from './styles.module.scss'

const newsItem = {
  title: 'Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича',
  date: '26.07.2021',
  text: 'С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...',
  img: news1,
}

const news = Array.from<typeof newsItem>({ length: 5 }).fill(newsItem)

interface Properties {}

const News: ComponentType<PropsWithChildren<Properties>> = () => {
  const [emblaReference, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      skipSnaps: true,
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  )

  const scrollPrevious = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  return (
    <div className={styles.news}>
      <h2 className={styles.news__header}>НОВОСТИ</h2>

      <div className={styles.wrapper}>
        <div className={styles.slider} ref={emblaReference}>
          <ul className={styles.list}>
            {news.map(({ title, date, text, img }, index) => (
              <li className={styles.item} key={index}>
                <Image className={styles.img} src={img} alt={title} />

                <p className={styles.title}>{title}</p>

                <p className={styles.date}>{date}</p>

                <p className={styles.text}>{text}</p>

                <Button
                  className={styles.button}
                  component={Link}
                  small
                  href="#"
                >
                  Подробнее
                </Button>
              </li>
            ))}
          </ul>

          <button className={styles.wrapper__button} onClick={scrollPrevious}>
            <span className="hidden">Предыдущий</span>

            <svg fill="none" viewBox="0 0 19 19">
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M4 9.5c0-.3.2-.7.5-1l8.1-8a1.3 1.3 0 1 1 2 1.9L7.2 9.5l7.2 7.2a1.3 1.3 0 1 1-1.9 2l-8.1-8.3c-.3-.2-.4-.6-.4-.9Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M19 0v19H0V0z" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <button className={styles.wrapper__button} onClick={scrollNext}>
            <span className="hidden">Следующий</span>

            <svg fill="none" viewBox="0 0 19 19">
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M4 9.5c0-.3.2-.7.5-1l8.1-8a1.3 1.3 0 1 1 2 1.9L7.2 9.5l7.2 7.2a1.3 1.3 0 1 1-1.9 2l-8.1-8.3c-.3-.2-.4-.6-.4-.9Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M19 0v19H0V0z" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.links}>
        <Button component={Link} href="#" accent>
          Посмотреть все новости
        </Button>
        <Button component={Link} href="#" secondary>
          Подписаться на новости
        </Button>
      </div>
    </div>
  )
}

export default News
