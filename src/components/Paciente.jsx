
export const Paciente = ({paciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente

  return (
    <div className="bg-white shadow-md rounded-md py-10 px-5 mx-5 my-10">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {nombre}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Propietario:
        <span className="font-normal normal-case"> {propietario}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Email:
        <span className="font-normal normal-case"> {email}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">
          {fecha}
        </span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Síntomas
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-md">Editar</button>
        <button className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-md">Eliminar</button>
      </div>
    </div>
  );
}

export default Paciente;