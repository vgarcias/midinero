function ListaMovimientos({movimientos}){
    return(
        <>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Historial de movimientos</h2>
        <ul className="flex flex-col gap-3">
            {movimientos.map(
                (movimiento) => (
                <li 
                    key={movimiento.id}
                    className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <p className="capitalize font-medium text-gray-800">{movimiento.descripcion}</p>
                        <p className="text-sm text-gray-500">{movimiento.fecha} - {movimiento.categoria} - {movimiento.formaPago}</p>
                    </div>
                        <p className={ `text-lg font-semibold ${movimiento.tipoPago === 'gasto' ? 'text-red-800' : 'text-green-900' } `}>
                            {movimiento.tipoPago==='gasto' ? '-' : '+'}${movimiento.monto}</p>
                </li>
                )
            )}

        </ul>
        </>
    )
}

export default ListaMovimientos