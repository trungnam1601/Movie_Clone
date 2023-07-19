// swiper
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
// styles
import styles from './Slidebar.module.scss';
import classNames from 'classnames/bind';
//
// import SlidebarItem from '../SliderbarItem/SlidebarItem';
import { useEffect, useState } from 'react';
import tmdbApi, { movieType, category } from '../../../../common/api/tmdbApi';
import apiConfig from '../../../../common/api/apiConfig';
import { useNavigate } from 'react-router-dom';

//mui

import { Modal, Fade, Button, Box } from '@mui/material';
import Youtube from 'react-youtube';

// import MovieTrailerModal from '../MovieTrailerModal/MovieTrailerModal';

const cx = classNames.bind(styles);
function Slidebar() {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const respone = await tmdbApi.getMoviesList(movieType.popular, 1);
                // console.log(respone.results);

                setMovieItems(respone.results.slice(1, 5));
            } catch (error) {
                console.log('error', error);
            }
        };
        getMovies();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
            >
                {movieItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <SlidebarItem
                                title={item.title}
                                id={item.id}
                                overview={item.overview}
                                className={`${isActive ? 'isActive' : ''}`}
                                poster_path={item.poster_path}
                                background={item.backdrop_path ? item.backdrop_path : item.poster_path}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const SlidebarItem = ({ className, title, overview, poster_path, id, background }) => {
    const navigate = useNavigate();
    const backdrop = apiConfig.originalImage(background);
    const [trailer, setTrailer] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getTrailer = async () => {
        const officialTrailer = await tmdbApi.getVideos(category.movie, id);

        console.log(officialTrailer);

        if (officialTrailer.results) {
            const videoTrailer = officialTrailer.results.filter((vid) => vid.name === 'Official Trailer');
            console.log(videoTrailer[0].key);

            setTrailer(videoTrailer[0].key ? videoTrailer[0].key : officialTrailer.results[0].key);
        }
        handleOpen();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '6px solid #000',
        boxShadow: 24,
    };

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className={cx('item', `${className}`)} style={{ backgroundImage: `url(${backdrop})` }}>
            <div className={cx('item-content')}>
                <div
                    className={cx('item-info')}
                    data-aos="zoom-out-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                >
                    <h2 className={cx('title')}>{title}</h2>
                    <div className={cx('overview')}>{overview}</div>
                    <div className={cx('btn')}>
                        <Button variant="danger" className={cx('watchnowbtn')} onClick={() => navigate('/movie/' + id)}>
                            Watch now
                        </Button>
                        <Button variant="danger" onClick={getTrailer} className={cx('trailerbtn')}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div
                    className={cx('item__content--poster')}
                    data-aos="zoom-out-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                >
                    <img src={apiConfig.w500Image(poster_path)} alt="poster" />
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Youtube videoId={trailer} opts={opts} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Slidebar;
