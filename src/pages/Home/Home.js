import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Slidebar from './components/Slidebar/Slidebar';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListItem from '../../common/components/ListItem/ListItem';
import { category, movieType, tvType } from '../../common/api/tmdbApi';

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <Slidebar />
            <Container fluid>
                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Trending Movies</h2>
                        <Link to={'/movie'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem cate={category.movie} type={movieType.popular} />
                </div>

                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Top Rated Movies</h2>
                        <Link to={'/movie'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem cate={category.movie} type={movieType.top_rated} />
                </div>

                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Trending Tv</h2>
                        <Link to={'/tv'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem cate={category.tv} type={tvType.popular} />
                </div>

                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Top Rated Tv</h2>
                        <Link to={'/tv'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem cate={category.tv} type={tvType.top_rated} />
                </div>
            </Container>
        </>
    );
}

export default Home;
