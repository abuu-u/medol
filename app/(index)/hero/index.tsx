'use client'

import Button from '@/common/button'
import { cn } from '@/shared/utils'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ComponentType,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react'
import bg from './bg.png'
import slideImg from './slide.png'
import styles from './styles.module.scss'

interface Properties {}

const slide = {
  title: 'Анализатор ABL800 FLEX',
  text: 'Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии',
  img: slideImg,
}

const slides = Array.from<typeof slide>({ length: 3 }).fill(slide)

const Hero: ComponentType<PropsWithChildren<Properties>> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaReference, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      skipSnaps: true,
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  )

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.internalEngine().index.get())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={styles.hero} ref={emblaReference}>
      <div className={styles.slider}>
        {slides.map(({ title, text, img }, index) => (
          <div className={styles.slide} key={index}>
            <div>
              <h2 className={styles.slide__header}>{title}</h2>

              <p className={styles.slide__text}>{text}</p>

              <Button component={Link} href="#">
                Подробнее
              </Button>
            </div>

            <Image
              className={styles.slide__img}
              src={img}
              alt={title}
              priority
            />
          </div>
        ))}
      </div>

      <Image className={styles.hero__bg} src={bg} alt="" />

      <div className={styles.buttons}>
        {slides.map((_, index) => (
          <button
            onClick={() => scrollTo(index)}
            className={cn(
              styles.button,
              index === selectedIndex && styles['button--active'],
            )}
            key={index}
          >
            <span className="hidden">Перейти к {index + 1} слайду</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero
