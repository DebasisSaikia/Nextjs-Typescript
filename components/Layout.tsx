import styles from '../pages/Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout
