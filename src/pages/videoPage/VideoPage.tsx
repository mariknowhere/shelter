import {FC} from 'react';
import styles from './VideoPage.module.scss';

const VideoPage: FC = () => {
  return (
    <div className={styles['video']}>
      <img src="/assets/images/video.png" alt="Видео" className={styles['video-item']} />
      <img src="/assets/icons/video_circle.svg" alt="Круг" className={styles['video-circle']} />
      <img src="/assets/icons/video_planets.svg" alt="Фото" className={styles['video-planets']} />
      <img src="/assets/icons/video_lines.svg" alt="Фото" className={styles['video-lines']} />
    </div>
  );
};

export default VideoPage;
