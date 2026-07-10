import { useState } from 'react'
function FormularioMovimiento({agregarMovimiento}) {
    const [formulario, setFormulario] = useState({
        descripcion: '',
        monto: '',
        categoria: '',
        formaPago: '',
        fecha: '',
        tipoPago: ''  
    })

    function manejarCambio(evento){
        const {name, value} = evento.target 
        setFormulario({
            ...formulario,
            [name]:value
        })
    }
    
    function manejarEnvio(evento){
        evento.preventDefault()
        agregarMovimiento(formulario)
        setFormulario({
            descripcion: '',
            monto: '',
            categoria: '',
            formaPago: '',
            fecha: '',
            tipoPago: ''
        })
        console.log('Formulario enviado :', formulario)
    }

    return(
      <form onSubmit={manejarEnvio} className="flex flex-col gap-4 border rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Nuevo movimiento</h2>
        <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Tipo</label>
            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input 
                        type="radio"
                        name="tipoPago"
                        value="gasto"
                        checked={formulario.tipoPago === 'gasto'}
                        onChange={manejarCambio}
                    /> Gasto
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="tipoPago"
                        value="ingreso"
                        checked={formulario.tipoPago === 'ingreso'}
                        onChange={manejarCambio}
                    /> Ingreso
                </label>
            </div>
        </div>
        <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600 mb-1">Descripción : </label>
        <input 
            type="text"
            id="descripcion"
            name="descripcion"
            value={formulario.descripcion}
            onChange={manejarCambio}
            className="border rounded px-3 py-2 w-full"
        /></div>
        <div>
        <label htmlFor="monto" className="block text-sm font-medium text-gray-600 mb-1">Monto : </label>
        <input
            type="number"
            id="monto"
            name="monto"
            value={formulario.monto}
            onChange={manejarCambio}
            className="border rounded px-3 py-2 w-full"
        /></div>
        <div>
        <label htmlFor="fecha" className="block text-sm font-medium text-gray-600 mb-1">Fecha : </label>
        <input 
            type="date"
            id="fecha"
            name="fecha"
            value={formulario.fecha}
            onChange={manejarCambio}
            className="border rounded px-3 py-2 w-full"
        /></div>
        <div>
        <label htmlFor="categoria" className="block text-sm font-medium text-gray-600 mb-1">Categoría : </label>
        <select
            id="categoria"
            name="categoria"
            value={formulario.categoria}
            onChange={manejarCambio}
            className="border rounded px-3 py-2 w-full"
        >
            <option value="">--- Selecciona ---</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Comida">Comida</option>
            <option value="Despensa">Despensa</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Personales">Personales</option>
            <option value="Regalos">Regalos</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Salud">Salud</option>
            <option value="Servicios">Servicios</option>
            <option value="Transporte">Transporte</option>
            <option value="Viajes">Viajes</option>
        </select></div>
        <div>
        <label htmlFor="formaPago" className="block text-sm font-medium text-gray-600 mb-1">Forma de pago : </label>
        <select
            id="formaPago"
            name="formaPago"
            value={formulario.formaPago}
            onChange={manejarCambio}
            className="border rounded px-3 py-2 w-full"
        >
            <option value="">--- Selecciona ---</option>
            <option value="Efectivo">Efectivo</option>
            <option value="TarjetaDebito">Tarjeta de débito</option>
            <option value="TarjetaCredito">Tarjeta de crédito</option>
            <option value="Transferencia">Transferencia</option>
        </select></div>
        
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Guardar movimiento
        </button>
      </form>
    )
}

export default FormularioMovimiento