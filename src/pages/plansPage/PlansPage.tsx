import {FC} from 'react';
import styles from './PlansPage.module.scss';
import classNames from "classnames";

const PlansPage: FC = () => {
  return (
    <div className={styles['plans']}>
      <div className={styles['plans-content']}>
        <div className={styles['plans-header']}>
          <h2 className={styles['plans-header-title']}>Shelter</h2>
          <h3 className={styles['plans-header-topic']}>проект который уже работает!</h3>
          <span className={styles['plans-header-description']}>
            В данный момент мы проводим сбор средств в наше DAO, который будет распределен нашими консулами по нуждающимся
            приютам.
          </span>
        </div>
        <div className={styles['plans-block']}>
          <div className={styles['plans-block-item']}>
            <h4 className={classNames(styles['plans-block-item-title'], styles['plans-block-item-title_green'])}>
              РЕАЛИЗУЕТСЯ СЕЙЧАС
            </h4>
            <div className={styles['plans-block-item-list']}>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_green.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>NFT анонс</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  В преимуществах или другом месте нужно указать, что участвуя в DAO Shelter вы претендуете на получение
                  NFT, которая будет распределена между участниками комьюнити в зависимости от вклада в сообщество.
                </span>
              </div>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_green.svg" alt="Блески"/>
                  <img src="/assets/icons/light_green.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>Комьюнити таски</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  Если вы не можете помочь приютам средствами, то вы можете поучаствовать в нашем комьюнити (ссылка на
                  комьюнити). Всем участникам Shelter com? будет доступны ежедневные и еженедельные задания в Discord.
                  Проявляйте социальную активность, чтобы получить NFT Shelter.
                </span>
              </div>
            </div>
          </div>
          <div className={styles['plans-block-item']}>
            <h4 className={classNames(styles['plans-block-item-title'], styles['plans-block-item-title_red'])}>
              В ПЛАНАХ РЕАЛИЗОВАТЬ
            </h4>
            <div className={styles['plans-block-item-list']}>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>Приложение - агрегатор приютов</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  Отслеживайте все приюты, подключенные к Shelter в реальном времени.
                </span>
              </div>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>Комьюнити таски</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  Если вы не можете помочь приютам средствами, то вы можете поучаствовать в нашем комьюнити (ссылка на
                  комьюнити). Всем участникам Shelter com? будет доступны ежедневные и еженедельные задания в Discord.
                  Проявляйте социальную активность, чтобы получить NFT Shelter.
                </span>
              </div>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>Благотворительный NFT маркетплейс</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  Любой пользователь может приобрести NFT, которое включает в себя ценность разного уровня, будь то
                  покупка питания для приюта, или оплата операции тому или иному животному.
                </span>
              </div>
              <div className={styles['plans-block-item-list-item']}>
                <div className={styles['plans-block-item-list-item-images']}>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                  <img src="/assets/icons/light_red.svg" alt="Блески"/>
                </div>
                <h5 className={styles['plans-block-item-list-item-title']}>NFC мерч</h5>
                <span className={styles['plans-block-item-list-item-description']}>
                  Разработка мерча с интеграцией NFC чипов, с помощью которых можно увидеть NFT паспорт животного с
                  полной информацией по нему.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
