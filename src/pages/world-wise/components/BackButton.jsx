import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const BackButton = (props) => {
  // const {} = props;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/word-wise/app/cities');
  };

  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles.back}`}>
      &larr; Back
    </button>
  );
};

export default BackButton;
