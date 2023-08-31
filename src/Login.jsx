const IniciarSesion = () => {

    return(
        <>
        <h2>Iniciar Sesion</h2>
        
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
            <button type="submit">Iniciar Sesion</button>
        
        </form>
        </>
    );
};

export default IniciarSesion;