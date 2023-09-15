import routes from './routes/route'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
function App() {

  return (
    <>
      
      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          {routes.map((route,index)=><Route key={`${index}_${route.path}`} path={route.path} element={route.el}/>)}
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </>
  )
}

export default App
