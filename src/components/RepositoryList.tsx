import { useState , useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss';

interface Repository{
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryName(){
    const [repositories , setRepositories] = useState<Repository[]>([])

    useEffect(() =>{
         fetch('https://api.github.com/users/Cr-collab/repos')
         .then(response => response.json())
         .then(data => setRepositories(data))
    } , [repositories])
    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>
            <ul>   

                {
                    repositories.map((repositories) =>{
                        return  < RepositoryItem  key={repositories.name} repository= {repositories} />
                    })
                }
              
              

            </ul>
        </section>
    )

} 