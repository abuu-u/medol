import { cn } from '@/shared/utils'
import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Properties<T extends React.ElementType = 'button'> {
  component?: T
  secondary?: boolean
  accent?: boolean
  small?: boolean
}

const Button = <T extends React.ElementType = 'button'>({
  children,
  className,
  component,
  secondary,
  small,
  accent,
  ...rest
}: PropsWithChildren<Properties<T> & React.ComponentProps<T>>) => {
  const Component = component ?? 'button'

  return (
    <Component
      className={cn(
        secondary ? styles.secondary : accent ? styles.accent : styles.button,
        !!small && styles.small,
        className,
      )}
      {...rest}
    >
      {children}{' '}
      {(secondary || accent) && (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g clipPath="url(#clip0_0_64)">
            <path d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z" />
            <path d="M13.3966 21.6344L19.2061 15.8249C19.6569 15.3718 19.6569 14.6398 19.2061 14.1866L13.3966 8.37719C12.9621 8.00424 12.3195 8.00424 11.885 8.37718C11.3981 8.79431 11.3413 9.52861 11.7584 10.0155L16.7428 15L11.7583 19.9961C11.3075 20.4493 11.3075 21.1812 11.7583 21.6344C12.2115 22.0852 12.9435 22.0852 13.3966 21.6344Z" />
          </g>
          <defs>
            <clipPath id="clip0_0_64">
              <rect
                width="30"
                height="30"
                fill="white"
                transform="translate(30) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </Component>
  )
}

export default Button
