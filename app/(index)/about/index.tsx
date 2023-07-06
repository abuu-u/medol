import Button from '@/common/button'
import Link from 'next/link'
import { ComponentType, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Properties {}

const About: ComponentType<PropsWithChildren<Properties>> = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__header}>О КОМПАНИИ</h2>

      <div className={styles.wrapper}>
        <p className={styles.text}>
          Группа компаний MEDOL создавалась{'\n'} высококвалифицированными
          специалистами в сфере медицины, инженерии и экономики, за плечами
          которых значительный опыт на рынке высоких медицинских технологий,
          которая имеет свои представительства в разных уголках Земли. В 2011
          году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
          Services”. Цель компании построить прозрачный долгосрочный бизнес,
          принести пользу обществу путем развития и внедрения передовых
          технологий в систему здравоохранения Республики Узбекистан.
        </p>

        <Button component={Link} href="#" small>
          Узнать больше
        </Button>
      </div>
    </div>
  )
}

export default About
