import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../../../common/api/apiConfig';
import tmdbApi from '../../../../common/api/tmdbApi';
import images from '../../../../assets/images/images';
import styles from './CastList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function CastList() {
    const { category, id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, id);
            console.log(res.cast);
            setCasts(res.cast.slice(1, 6));
        };
        getCredits();
    }, [category, id]);
    return (
        <div className={cx('wrapper')}>
            {casts.map((item, index) => (
                <div key={index} className={cx('item')}>
                    <div
                        className={cx('item-img')}
                        style={{
                            backgroundImage: `url(${
                                item.profile_path ? apiConfig.w500Image(item.profile_path) : images.noImage
                            })`,
                        }}
                    ></div>
                    <p className={cx('item-name')}>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default CastList;
