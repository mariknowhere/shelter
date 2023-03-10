import {FC, useEffect, useState} from 'react';
import styles from './VideoPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";

const VideoPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
    const [isCircleVisible, setCircleVisible]= useState(false);
    const [isPlanetsVisible, setPlanetsVisible]= useState(false);
    const [isLinesVisible, setLinesVisible]= useState(false);
    const [isVideoVisible, setVideoVisible]= useState(false);

    useEffect(() => {
        if (isAnimate) {
            if (!isCircleVisible) {
                setTimeout(() => {
                    setCircleVisible(true);
                }, 500);
            }

            if (isCircleVisible) {
                setTimeout(() => {
                    setPlanetsVisible(true);
                }, 500);
            }

            if (isPlanetsVisible) {
                setTimeout(() => {
                    setLinesVisible(true);
                }, 500);
            }

            if (isLinesVisible) {
                setTimeout(() => {
                    setVideoVisible(true);
                }, 500);
            }
        }
    }, [isAnimate, isCircleVisible, isLinesVisible, isPlanetsVisible]);

  return (
    <div className={styles['video']}>
      <video
        poster="/assets/images/video.png"
        playsInline
        muted
        controls
        className={classNames(styles['video-item'], {'active': isVideoVisible, [styles['video-item_active']]: isVideoVisible})}
      >
        <source src="/assets/video/example.mp4"/>
      </video>
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
