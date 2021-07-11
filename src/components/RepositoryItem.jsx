export function RepositoryItem(props) {
    return (
        <li>
           <strong> { props.repositorio.name ? props.repositorio.name  : 'Default' } </strong>
            <p> { props.repositorio.description ? props.repositorio.description : 'Default' }</p>
            <a href={props.repositorio.link}>
              Acessar repositorio
            </a>
        </li>
    );
}