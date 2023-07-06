import Footer from '@/common/footer'
import Header from '@/common/header'
import About from './about'
import Hero from './hero'
import News from './news'
import Partners from './partners'
import Products from './products'
import Services from './services'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <h1 className="hidden">Главная</h1>

        <Hero />

        <Products />

        <Services />

        <About />

        <News />

        <Partners />
      </main>

      <Footer />
    </>
  )
}
