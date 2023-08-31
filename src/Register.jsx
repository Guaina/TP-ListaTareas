const PaginaRegistro = () => {

    return(
        <>
        <h2>Registro</h2>
        
        <form>
        
            <label>
                Nombre de Usuario:<br />
                <input type="text" />
            </label>
            <br />
            <label>
                Contraseña:<br />
                <input type="password" />
            </label>
            <br />
            <br />
            <button type="submit">Registrarse</button>
        
        </form>
        </>
    );
};

export default PaginaRegistro;