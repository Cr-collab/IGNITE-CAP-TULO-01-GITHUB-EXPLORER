import { RepositoryItem } from "./RepositoryItem"

const repositorio = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform"
}
export function RepositoryName(){

    return (
        <section>
            <ul>   
               < RepositoryItem  repositorio = {repositorio} />
               < RepositoryItem  repositorio = {repositorio} />
               < RepositoryItem  repositorio = {repositorio} />
               < RepositoryItem  repositorio = {repositorio}  />


            </ul>
        </section>
    )

} 