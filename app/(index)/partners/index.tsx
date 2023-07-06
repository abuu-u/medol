'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ComponentType, PropsWithChildren, useCallback } from 'react'
import partner1 from './partner-1.png'
import partner2 from './partner-2.png'
import partner3 from './partner-3.png'
import partner4 from './partner-4.png'
import partner5 from './partner-5.png'
import partner6 from './partner-6.png'
import partner7 from './partner-7.png'
import partner8 from './partner-8.png'
import styles from './styles.module.scss'

const partners = [
  [partner1, partner2],
  [partner3, partner4],
  [partner5, partner6],
  [partner7, partner8],
  [partner1, partner2],
  [partner3, partner4],
  [partner5, partner6],
  [partner7, partner8],
]

interface Properties {}

const Partners: ComponentType<PropsWithChildren<Properties>> = () => {
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
    <div className={styles.partners}>
      <h2 className={styles.partners__header}>ПАРТНЕРЫ</h2>

      <div className={styles.wrapper}>
        <div className={styles.slider} ref={emblaReference}>
          <ul className={styles.list}>
            {partners.map(([img1, img2], index) => (
              <li className={styles.item} key={index}>
                <Image
                  className={styles.img}
                  src={img1}
                  alt={`Партнер ${index + 1}`}
                />
                <Image
                  className={styles.img}
                  src={img2}
                  alt={`Партнер ${index + 1}`}
                />
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
    </div>
  )
}

export default Partners
