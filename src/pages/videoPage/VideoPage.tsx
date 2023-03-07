import {FC, useEffect, useState} from 'react';
import styles from './VideoPage.module.scss';
import classNames from "classnames";

const VideoPage: FC = () => {
    const [isCircleVisible, setCircleVisible]= useState(false);
    const [isPlanetsVisible, setPlanetsVisible]= useState(false);
    const [isLinesVisible, setLinesVisible]= useState(false);
    const [isVideoVisible, setVideoVisible]= useState(false);

    useEffect(() => {
        if (!isCircleVisible) {
            setTimeout(() => {
                setCircleVisible(true);
            }, 1000);
        }

        if (isCircleVisible) {
            setTimeout(() => {
                setPlanetsVisible(true);
            }, 1000);
        }

        if (isPlanetsVisible) {
            setTimeout(() => {
                setLinesVisible(true);
            }, 1000);
        }

        if (isLinesVisible) {
            setTimeout(() => {
                setVideoVisible(true);
            }, 1000);
        }
    }, [isCircleVisible, isLinesVisible, isPlanetsVisible]);

  return (
    <div className={styles['video']}>
      <img src="/assets/images/video.png"
           alt="Видео"
           className={classNames(styles['video-item'], { 'active': isVideoVisible })}
      />
      <img src="/assets/icons/video_circle.svg"
           alt="Круг"
           className={classNames(styles['video-circle'], { 'active': isCircleVisible })}
      />
      <img src="/assets/icons/video_planets.svg"
           alt="Планеты"
           className={classNames(styles['video-planets'], { 'active': isPlanetsVisible })}
      />
      <img src="/assets/icons/video_lines.svg"
           alt="Линии"
           className={classNames(styles['video-lines'], { 'active': isLinesVisible })}
      />
    </div>
  );
};

export default VideoPage;
