import images from '../../../../assets/images/images';
import styles from './PageHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function PageHeader({ children }) {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.bg})` }}>
            <h2>{children}</h2>
        </div>
    );
}

export default PageHeader;
