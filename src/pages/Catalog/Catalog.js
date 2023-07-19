import PageHeader from './components/PageHeader/PageHeader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { category as cate } from '../../common/api/tmdbApi';
import MovieCatalog from './components/MovieCatalog/MovieCatalog';
function Catalog() {
    const { category } = useParams();
    return (
        <>
            <PageHeader>{category === cate.tv ? 'TV Series' : 'Movies'}</PageHeader>
            <div className="container-fluid">
                <div className="section ">
                    <MovieCatalog cate={category} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
