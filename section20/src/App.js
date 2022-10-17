import { Route } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import Product from './pages/Products'
import Welcome from './pages/Welcome'

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </main>
    </div>
  )
}

export default App
