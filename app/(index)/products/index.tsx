import Button from '@/common/button'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, PropsWithChildren } from 'react'
import product1 from './product-1.png'
import product2 from './product-2.png'
import product3 from './product-3.png'
import product4 from './product-4.png'
import product5 from './product-5.png'
import product6 from './product-6.png'
import styles from './styles.module.scss'

const products = [
  { name: 'Эндоваскулярная хирургия', img: product1 },
  { name: 'Лабораторная диагностика', img: product2 },
  { name: 'Кардиохирургия', img: product3 },
  { name: 'ДИАБЕТ', img: product4 },
  { name: 'ЭНДОУРОЛОГИЯ', img: product5 },
  { name: 'АРИТМОЛОГИЯ', img: product6 },
]

interface Properties {}

const Products: ComponentType<PropsWithChildren<Properties>> = () => {
  return (
    <div className={styles.products}>
      <h2 className={styles.products__header}>ПРОДУКЦИЯ</h2>

      <ul className={styles.list}>
        {products.map(({ name, img }, index) => (
          <li className={styles.item} key={index}>
            <Image className={styles.img} src={img} alt={name} />

            <p className={styles.title}>{name}</p>

            <Button component={Link} href="#">
              Посмотреть все
            </Button>
          </li>
        ))}
      </ul>

      <Button className={styles.button} component={Link} secondary href="#">
        Перейти в каталог нашей продукции
      </Button>
    </div>
  )
}

export default Products
