import logo from '@/app/logo.png'
import { address, tel1, tel2 } from '@/shared/contacts'
import { cn, phoneMask } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Properties {}

const Header: ComponentType<PropsWithChildren<Properties>> = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.top}>
          <p className={styles['top__address']}>
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

          <p className={styles['top__phone']}>
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

          <Link className={styles['top__logo']} href="/">
            <Image src={logo} alt="Лого" />
          </Link>

          <label className={styles['top__search']} htmlFor="search">
            <span className={styles['top__svg-wrapper']} id="search">
              <svg fill="none" viewBox="0 0 26 26">
                <path
                  fill="#0D4C93"
                  d="M4.73 17.927c-3.64-3.638-3.64-9.56 0-13.198 3.638-3.639 9.559-3.639 13.197 0 3.087 3.087 3.555 7.678 1.404 11.263 0 0-.154.26.054.468l4.762 4.761c.948.948 1.173 2.273.333 3.114l-.145.144c-.84.84-2.166.615-3.113-.332l-4.752-4.752c-.218-.218-.477-.064-.477-.064-3.585 2.15-8.177 1.683-11.264-1.404Zm11.474-1.723a6.904 6.904 0 0 0 0-9.752 6.903 6.903 0 0 0-9.752 0 6.904 6.904 0 0 0 0 9.752 6.904 6.904 0 0 0 9.752 0Z"
                />
                <path
                  fill="#0D4C93"
                  d="M15.609 10.774a.962.962 0 0 0 .886-1.338 6.07 6.07 0 0 0-7.947-3.221.963.963 0 0 0 .75 1.774 4.142 4.142 0 0 1 5.423 2.197.964.964 0 0 0 .888.588Z"
                />
              </svg>
            </span>

            <input className="hidden" type="search" />
          </label>

          <a
            className={cn(styles['top__svg-wrapper'], styles['top__facebook'])}
            href="https://www.facebook.com/"
            target="_blank"
          >
            <svg fill="none" viewBox="0 0 22 22">
              <path
                fill="#0D4C93"
                d="M12.7 22V12h3.4l.5-4h-3.9V5.7c0-1.2.3-2 2-2h2V.3a28 28 0 0 0-3-.2c-3 0-5 1.8-5 5.2V8H5.3V12h3.4v10h4Z"
              />
            </svg>
            Мы на Facebook
          </a>

          <button
            className={cn(styles['top__svg-wrapper'], styles['top__lang'])}
          >
            <svg viewBox="0 0 30 30" fill="none">
              <rect x="-11" width="47" height="31" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_0_100"
                    transform="matrix(0.000833333 0 0 0.00126344 0 -0.00537634)"
                  />
                </pattern>
                <image
                  id="image0_0_100"
                  width="1200"
                  height="800"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgBAMAAADBzoYxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX///+qveEAOaaOMEvVKx7/j+iDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UCBQU6IN9Pv5kAAARUSURBVHja7dJBDQAgEAPBWsACFrCAf02YuD5IZiRsNgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPrCgIBsKjIWxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWBhLAoyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLDAWxsJYMD3WgYJcKDAWxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2NhLAkwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMhbHAWBgLY8GwB2DTFJhG2Cf4AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTA1VDA1OjU4OjMyKzAwOjAwc+aQugAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0wNVQwNTo1ODozMiswMDowMAK7KAYAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            Русский
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 11 11"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#0D4C93"
                  d="M5.5 8.64c-.2 0-.4-.08-.54-.23L.23 3.68a.77.77 0 1 1 1.09-1.09L5.5 6.78l4.19-4.19a.77.77 0 0 1 1.08 1.09L6.04 8.41a.77.77 0 0 1-.54.23Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h11v11H0z" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className={styles.bottom}>
          <Link className={styles.bottom__link} href="#">
            Магазин
          </Link>
          <Link className={cn(styles.bottom__link, styles.active)} href="#">
            О компании
          </Link>
          <Link className={styles.bottom__link} href="#">
            Продукция
          </Link>
          <Link className={styles.bottom__link} href="#">
            Услуги
          </Link>
          <Link className={styles.bottom__link} href="#">
            Акции и новости
          </Link>
          <Link className={styles.bottom__link} href="#">
            Обратная связь
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
