import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../common/api/apiConfig';
import tmdbApi from '../../common/api/tmdbApi';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import CastList from './Component/CastList/CastList';

import Youtube from 'react-youtube';

const cx = classNames.bind(styles);
function Detail() {
    const [item, setItem] = useState([]);
    const { category, id } = useParams();
    const [trailer, setTrailer] = useState('');

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await tmdbApi.detail(category, id);
                console.log(response);
                setItem(response);
            } catch (error) {
                console.log(error.message);
            }
        };
        getDetail();
    }, [category, id]);

    const getTrailer = async () => {
        const officialTrailer = await tmdbApi.getVideos(category, id);

        console.log(officialTrailer);

        if (officialTrailer.results) {
            const videoTrailer = officialTrailer.results.filter((vid) => vid.name === 'Official Trailer');
            // console.log(videoTrailer[0].key);

            setTrailer(videoTrailer[0].key ? videoTrailer[0].key : officialTrailer.results[0].key);
        }
    };

    getTrailer();

    const bg = apiConfig.originalImage(item.backdrop_path);
    const poster = apiConfig.w500Image(item.poster_path);

    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <>
            {item && (
                <div className={cx('wrapper')}>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div>
                    <div className={cx('content')}>
                        <div className={cx('content-poster')}>
                            <div
                                className={cx('content-poster__img')}
                                style={{
                                    backgroundImage: `url(${poster})`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('content-infor')}>
                            <h1 className={cx('title')}>{item.title || item.original_name}</h1>
                            <div className={cx('genres')}>
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, index) => (
                                        <span className={cx('genres__item')} key={index}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className={cx('overview')}>{item.overview}</p>
                            <div className={cx('cast')}>
                                <div className={cx('section__header')}>
                                    <h2>Casts</h2>
                                </div>
                                <CastList />
                            </div>
                        </div>
                    </div>
                    <div className={cx('trailler')}>
                        <h3>Trailer</h3>
                        <div className={cx('video')}>
                            <Youtube videoId={trailer} opts={opts} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Detail;
