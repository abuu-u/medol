import logo from '@/app/logo.png'
import { address, email, tel1, tel2 } from '@/shared/contacts'
import { cn, phoneMask } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, PropsWithChildren } from 'react'
import Button from '../button'
import styles from './styles.module.scss'

interface Properties {}

const Footer: ComponentType<PropsWithChildren<Properties>> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.top__left}>
          <div className={styles.top__top}>
            <p className={cn(styles['top__top-header'], styles.top__header)}>
              Контакты
            </p>

            <p className={styles['top__text-with-icon']}>
              <span className={styles['top__svg-wrapper']}>
                <svg fill="none" viewBox="0 0 25 25">
                  <path
                    fill="#0D4C93"
                    d="M12.5 0C7.508 0 3.446 4.062 3.446 9.054c0 6.196 8.102 15.291 8.447 15.676.324.36.89.36 1.214 0 .345-.385 8.447-9.48 8.447-15.676C21.554 4.062 17.492 0 12.5 0Zm0 13.61a4.56 4.56 0 0 1-4.555-4.556A4.56 4.56 0 0 1 12.5 4.499a4.56 4.56 0 0 1 4.555 4.555A4.56 4.56 0 0 1 12.5 13.61Z"
                  />
                </svg>
              </span>

              <span className={styles['top__left-text']}>{address}</span>
            </p>

            <p className={styles['top__text-with-icon']}>
              <span className={styles['top__svg-wrapper']}>
                <svg fill="none" viewBox="0 0 22 22">
                  <g fill="#0D4C93" clipPath="url(#a)">
                    <path d="M9.11 12.89a8.88 8.88 0 0 1-2.68-5.04.75.75 0 0 1 .22-.63l1.7-1.7c.24-.25.29-.64.1-.94L5.75.38A.76.76 0 0 0 4.76.1L.42 2.15A.75.75 0 0 0 0 2.9c.23 2.16 1.17 7.48 6.4 12.7 5.22 5.23 10.53 6.17 12.7 6.4.31.03.61-.14.75-.42l2.05-4.34a.76.76 0 0 0-.28-.99l-4.2-2.7a.76.76 0 0 0-.94.1l-1.7 1.7a.75.75 0 0 1-.63.22 8.88 8.88 0 0 1-5.04-2.68Z" />
                    <path d="M17.45 11.76a.76.76 0 0 1-.76-.76A5.7 5.7 0 0 0 11 5.31a.76.76 0 1 1 0-1.52c3.98 0 7.2 3.23 7.2 7.21 0 .42-.33.76-.75.76Z" />
                    <path d="M21.24 11.76a.76.76 0 0 1-.76-.76A9.5 9.5 0 0 0 11 1.52.76.76 0 1 1 11 0c6.07 0 11 4.93 11 11a.76.76 0 0 1-.76.76Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h22v22H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span className={styles['top__left-text']}>
                <a href={'tel:' + tel1} target="_blank">
                  {phoneMask(tel1)}
                </a>
                {'\n'}
                <a href={'tel:' + tel2} target="_blank">
                  {phoneMask(tel2)}
                </a>
              </span>
            </p>

            <a
              className={styles['top__text-with-icon']}
              href={'mailto:' + email}
            >
              <span className={styles['top__svg-wrapper']}>
                <svg fill="none" viewBox="0 0 23 23">
                  <g fill="#0D4C93" clipPath="url(#a)">
                    <path d="M20.98 2.74H2.02a2 2 0 0 0-.86.2l10.3 10.3 2.3-2.22 8.08-8.08a2 2 0 0 0-.86-.2ZM22.8 3.9l-7.6 7.6 7.6 7.6a2 2 0 0 0 .2-.86V4.76a2 2 0 0 0-.2-.86ZM.2 3.9a2 2 0 0 0-.2.86v13.48c0 .3.08.6.2.86l7.6-7.6L.2 3.9Z" />
                    <path d="m14.24 12.45-2.3 2.22a.67.67 0 0 1-.96 0l-2.22-2.22-7.6 7.6a2 2 0 0 0 .86.21h18.96a2 2 0 0 0 .86-.2l-7.6-7.6Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h23v23H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <span className={styles['top__left-text']}>{email}</span>
            </a>

            <Button component={Link} href="#">
              Оставить заявку
            </Button>
          </div>

          <div className={styles.top__bottom}>
            <Link className={styles.top__logo} href="/">
              <Image src={logo} alt="Лого" />
            </Link>

            <p>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>

        <div className={styles.top__right}>
          <div>
            <p className={styles.top__header}>О компании</p>

            <Link className={styles.top__text} href="#">
              История
            </Link>
            <Link className={styles.top__text} href="#">
              Партнеры
            </Link>
            <Link className={styles.top__text} href="#">
              Вакансии
            </Link>
          </div>

          <div>
            <p className={styles.top__header}>Продукция</p>

            <Link className={styles.top__text} href="#">
              Эндоваскулярная хирургия
            </Link>
            <Link className={styles.top__text} href="#">
              Аритмология
            </Link>
            <Link className={styles.top__text} href="#">
              Кардиохирургия
            </Link>
            <Link className={styles.top__text} href="#">
              Лабораторная диагностика
            </Link>
            <Link className={styles.top__text} href="#">
              Хирургия
            </Link>
            <Link className={styles.top__text} href="#">
              Эндоурология
            </Link>
            <Link className={styles.top__text} href="#">
              Нейрохирургия
            </Link>
            <Link className={styles.top__text} href="#">
              Анестезиология и реанимация
            </Link>
            <Link className={styles.top__text} href="#">
              Диабет
            </Link>
          </div>

          <div>
            <p className={styles.top__header}>Услуги</p>

            <Link className={styles.top__text} href="#">
              Сервис
            </Link>
            <Link className={styles.top__text} href="#">
              Регистрации
            </Link>
            <Link className={styles.top__text} href="#">
              Услуги логистики
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2023 ООО «Medical Online Services»</p>

        <p>
          Дизайн сделан:{' '}
          <a href="mailto:damingues92@gmail.com">damingues92@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
