
export const Paciente = () => {
  return (
    <div className="bg-white shadow-md rounded-md py-10 px-5 mx-5 my-10">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Nombre:
        <span className="font-normal normal-case"> Hook</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Propietario:
        <span className="font-normal normal-case"> Adrian</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Email:
        <span className="font-normal normal-case"> correo@correo.com</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha Alta:
        <span className="font-normal normal-case">
          {" "}
          10 de diciembre de 2022
        </span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Sintomas
        <span className="font-normal normal-case">lorem</span>
      </p>
    </div>
  );
}

export default Paciente;