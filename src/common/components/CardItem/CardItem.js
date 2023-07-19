//module
import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

//react icon
import { BsPlayFill } from 'react-icons/bs';
import { HiOutlineHeart } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
//
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';

const cx = classNames.bind(styles);
function CardItem({ title, name, img, cate, id }) {
    // const background = 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg';
    const background = apiConfig.w500Image(img);
    const link = '/' + category[cate] + '/' + id;

    return (
        <>
            <div className={cx('wrapper')} style={{ backgroundImage: `url(${background})` }}>
                <div className={cx('icon-close')}>
                    <RiCloseLine />
                </div>

                <div className={cx('icon-liked')}>
                    {/* <HiHeart className={cx('icon-liked-fill')} /> */}

                    <HiOutlineHeart className={cx('icon-liked-outline')} />
                </div>
                <Link to={link}>
                    <Button className={cx('btn')}>
                        <BsPlayFill />
                    </Button>
                </Link>
            </div>
            <span className={cx('title')}>{title || name}</span>
        </>
    );
}

export default CardItem;
