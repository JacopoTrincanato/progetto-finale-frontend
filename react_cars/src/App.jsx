import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import GlobalContext from './contexts/GlobalContext'
import DefaultLayout from './layout/DefaultLayout';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';

function App() {

  //creo la costante per l'url dell'API
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <>
      <GlobalContext.Provider value={{ apiUrl }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              <Route path='/'>
                <Route index element={<Cars />} />
                <Route path=':id' element={<CarDetails />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App