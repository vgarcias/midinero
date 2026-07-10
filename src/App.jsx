import {useState} from 'react'
import FormularioMovimiento from './components/FormularioMovimiento'
import ListaMovimientos from './components/ListaMovimientos'

function App() {
  const [movimientos, setMovimientos] = useState([])
  function agregarMovimiento(nuevoMovimiento){
    const movimientoId ={
      ...nuevoMovimiento,
      id:crypto.randomUUID()
    
    }
    setMovimientos([...movimientos, movimientoId])
  }

  console.log('Movimientos: ', movimientos)  

  const balance = movimientos.reduce((total, movimiento) => {
    if (movimiento.tipoPago === 'gasto'){
      return total - Number (movimiento.monto)
    } else {
      return total + Number (movimiento.monto)
    }
  }, 0 )

  return(
    <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">Mi Dinero</h1>
    <FormularioMovimiento agregarMovimiento={agregarMovimiento} />
    <ListaMovimientos movimientos={movimientos} />
    <p className={`text-2xl font-bold mb-6 ${balance >= 0 ? 'text-green-800' : 'text-red-800'} `}>
      Balance: ${balance}
    </p>
    </div>
  )

}

export default App