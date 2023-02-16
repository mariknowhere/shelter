import {FC} from 'react';
import styles from './PeoplePage.module.scss';

const PeoplePage: FC = () => {
  return (
    <div className={styles['people']}>
      <div className={styles['people-text']}>
        <h2 className={styles['people-title']}>Медийные</h2>
        <h2 className={styles['people-title']}>личности</h2>
      </div>
    </div>
  );
};

export default PeoplePage;
