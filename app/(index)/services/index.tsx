import Button from '@/common/button'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentType, PropsWithChildren } from 'react'
import bg from './bg.png'
import service1 from './service-1.png'
import service2 from './service-2.png'
import service3 from './service-3.png'
import styles from './styles.module.scss'

interface Properties {}

const services = [
  {
    title: 'Сервис оборудования',
    text: 'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......',
    img: service1,
  },
  {
    title: 'Регистрации',
    text: 'Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....',
    img: service2,
  },
  {
    title: 'Услуги логистики',
    text: 'Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....',
    img: service3,
  },
]

const Services: ComponentType<PropsWithChildren<Properties>> = () => {
  return (
    <div className={styles.services}>
      <h2 className={styles.services__header}>УСЛУГИ</h2>

      <ul className={styles.list}>
        <Image className={styles.list__bg} src={bg} alt="" />

        {services.map(({ title, text, img }, index) => (
          <li className={styles.item} key={index}>
            <Image className={styles.img} src={img} alt={title} />

            <div className={styles.wrapper}>
              <p className={styles.title}>{title}</p>

              <p className={styles.text}>{text}</p>
            </div>

            <Button className={styles.button} component={Link} small href="#">
              Подробнее
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
