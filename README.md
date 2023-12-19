# Practice Blog Client

### Funciones:

- Usuarios
- Leer blogs ajenos y propios
- Crear y editar tus propios blogs

Notas para mis mismo:

- Para integrar tailwind con React, tienes que fijarte si el compilador es create react app o vite. Me parece que la diferencia esta en que Vite se maneja con modulos por defecto.
- No manejes los errores (puede ser con try/catch) en el mismo servicio sino en el componente que va a ocupar el servicio asincrono.
- Nunca te olvides del _linter_

## Prop-types

```js
Post.propTypes = {
  post: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};
```

Al dejar claro que tipo de dato se espera recibir en cada componente, sera mucho mas facil descubrir si algun error en el componente tiene que ver con este tipo.

//Me gusta hacer codigo, pero hoy me centrare en planificar
