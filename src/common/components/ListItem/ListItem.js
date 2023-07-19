import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { useState, useEffect } from 'react';
// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

//
import CardItem from '../CardItem/CardItem';
import tmdbApi from '../../api/tmdbApi';
import { category } from '../../api/tmdbApi';

const cx = classNames.bind(styles);

function ListItem({ cate, type }) {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getListItem = async () => {
            let response = null;
            if (cate === category.movie) {
                response = await tmdbApi.getMoviesList(type);
            } else if (cate === category.tv) {
                response = await tmdbApi.getTvList(type);
            }

            setMovieItems(response.results);
        };
        getListItem();
    }, [cate, type]);
    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation, Keyboard, Mousewheel, Scrollbar, A11y]}
                navigation={true}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                spaceBetween={30}
                slidesPerView={6}
                slidesPerGroupAuto={true}
                speed={1500}
                className={cx('movie-swiper')}
            >
                {movieItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardItem
                            cate={category[cate]}
                            title={item.title}
                            name={item.name}
                            img={item.poster_path}
                            id={item.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ListItem;
