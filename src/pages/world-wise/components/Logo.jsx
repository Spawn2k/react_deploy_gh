import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <Link to={'/word-wise'}>
      <img src="/react_deploy_gh/assets/img/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}
4;
export default Logo;
