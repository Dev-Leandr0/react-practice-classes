import { useForm } from "react-hook-form";
import { Link } from "react-router";

function FormHook() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  function validarEdad(value) {
    return value >= 18;
  }

  // eslint-disable-next-line react-hooks/incompatible-library
  const incluirTelefono = watch("incluirTelefono");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Form Hook</h2>
      <Link to="/">Back</Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            {...register("nombre", {
              required: "Nombre es obligatorio",
              maxLength: {
                value: 10,
                message: "Nombre supera el limite de caracteres",
              },
            })}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Confirmar Email</label>
          <input
            type="text"
            id=""
            {...register("confirmarEmail", {
              validate: (value) => value === getValues("email"),
            })}
          />
          {errors.confirmarEmail && <p>EL correo no coincide</p>}
        </div>

        <div>
          <label>Edad</label>
          <input
            type="text"
            name="edad"
            id="edad"
            {...register("edad", { validate: validarEdad })}
          />
          {errors.edad && <p>Menor de edad</p>}
        </div>
        <br />
        <div>
          <label>Seleccionar Pais</label>
          <select name="pais" id="pais" {...register("pais")}>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </div>

        <div>
          <label>Incluir teléfono ?</label>
          <input type="checkbox" {...register("incluirTelefono")} />
          {incluirTelefono && (
            <div>
              <label>Teléfono: </label>
              <input type="text" {...register("telefono")} />
            </div>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormHook;
