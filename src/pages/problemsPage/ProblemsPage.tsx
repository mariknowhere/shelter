import {FC} from 'react';
import styles from './ProblemsPage.module.scss';

const ProblemsPage: FC = () => {
  return (
    <div className={styles['problems']}>
      <img src="/assets/images/problems-2.png" alt="Проблематика" className={styles['problems-image_second']} />
      <h2 className={styles['problems-title']}>проблематика</h2>
      <div className={styles['problems-block']}>
        <img src="/assets/images/problems-1.png" alt="Фотография" className={styles['problems-block-image']} />
        <div className={styles['problems-block-text']}>
          <h4 className={styles['problems-block-title']}>Общее количество бездомных животных в СНГ или мире</h4>
          <span className={styles['problems-block-description']}>
            В мире по примерным расчетам количество бездомных животных около 30 миллиардов котов и 10 триллионов собак.
            Это огромное количество животных находится на улице или уже внутри немногочисленных приютов по всему миру.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
