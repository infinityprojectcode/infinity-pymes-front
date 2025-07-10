export default function ModalProducto({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Agregar Producto
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              nombre: e.target.nombre.value,
              precio: parseFloat(e.target.precio.value),
              categoria: e.target.categoria.value,
              cantidad: parseFloat(e.target.cantidad.value),
            };
            onSubmit(data);
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input
            name="nombre"
            type="text"
            placeholder="Introduzca el nombre del producto"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <select
            name="categoria"
            required
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Seleccione una categoría</option>
          </select>
          <input
            name="precio"
            type="number"
            step="0.01"
            placeholder="1.000"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            name="cantidad"
            type="number"
            step="0.01"
            placeholder="0"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
