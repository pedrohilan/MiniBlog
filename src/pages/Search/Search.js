import styles from './Search.module.css'

import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'

function Search() {
    const query = useQuery()
    const search = query.get('q');

    const { documents: posts } = useFetchDocuments("posts", search);


    return (
        <div className={styles.search_container}>
            <h2>Busca por... '{search}'</h2>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                <p>Não forma encontrados posts!</p>
                <Link to='/' className='btn btn-dark'>Voltar</Link>
                </div>
            )}
            {posts && posts.map((post) => (<PostDetail key={post.id} post={post} />))}
        </div>
    )
}

export default Search