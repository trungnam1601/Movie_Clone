import Header from '../components/Header/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '../components/Footer/Footer';
import Sidebar from './../components/Sidebar/Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Sidebar />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
