import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

function App() {
  const travels = data.map(item =>{
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  
  return (
    <>
    <Header />
    <section className='cards-container'>
      {travels}
    </section>
    </>
  )
}

export default App
