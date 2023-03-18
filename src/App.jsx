import Carousel from './components/Carousel'
import './index.css'

function App() {

  const elem = [
    {id: 1, title: 'Title 1', description: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.', url: 'http://my-first-carousel', icon: "example1.svg"},
    {id: 2, title: 'Title 2', description: 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.', url: 'http://my-first-carousel', icon: "example2.svg"},
    {id: 3, title: 'Title 3', description: 'Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.A ordem dos tratores não altera o pão duris.', url: 'http://my-first-carousel', icon: "example3.svg"},
  ]

  return (
    <div>
      <Carousel delay={3} children={elem}/>
    </div>
  )
}

export default App
