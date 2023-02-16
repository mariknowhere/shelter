import {FC} from "react";
import styles from './SupportPage.module.scss';

const SupportPage: FC = () => {
  return (
    <div className={styles['support']}>
      <div className={styles['support-content']}>
        <div className={styles['support-text']}>
          <h2 className={styles['support-title']}>схема предоставления помощи приютам</h2>
          <span className={styles['support-description']}>
            Вся система строится на прозрачности и каждый пользователь сможет отследить историю транзакции.
          </span>
        </div>
        <div className={styles['support-block']}>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_yellow.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>Приют</span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_green.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Заявка на получение средств для определенной цели
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_purple.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Рассмотрение заявки от консулов
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_blue.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Одобрение заявки
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_black.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Поступление средств на кошелек приюта
              </span>
            </div>
          </div>
        </div>
        <div className={styles['support-bottom-wrapper']}>
          <div className={styles['support-bottom']}>
            <h4 className={styles['support-bottom-title']}>Ваш приют нуждается в помощи?</h4>
            <button className={styles['support-bottom-button']}>Заполнить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
