import {FC, useEffect, useRef, useState} from 'react';
import styles from './PeoplePage.module.scss';
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";
import {IPage} from "../PageTypes";

const PeoplePage: FC<IPage> = ({ isAnimate, setAnimate }) => {
    const [heightImage, setHeightImage] = useState(0);
    const [widthImage, setWidthImage] = useState(0);

    const [count, setCount] = useState(0);
    const [peopleImageCount, setPeopleImageCount] = useState(1);

    const [isTitleVisible, setTitleVisible]= useState(false);

    const peopleWrapper = useRef(null);

    useEffect(() => {
        if (isAnimate) {
            if (!isTitleVisible) {
                splitText('data-people-title');
                animateText('data-people-title', 1000);

                setTitleVisible(true);
            }

            setInterval(() => {
                setCount(prevState => prevState + 1)
            }, 0)

        }
    }, [isAnimate]);

    const onMouseMove = (event: any) => {
        setWidthImage(event.clientX);
        setHeightImage(event.clientY);

        if (count >= 50 && widthImage) {
            if (peopleImageCount >= 15) {
                setPeopleImageCount(1)
            } else {
                setPeopleImageCount(prevState => prevState + 1)
            }

            const image = document.createElement('img');
            image.src = `/assets/images/people-${peopleImageCount}.png`;

            let imageWidth = image.width;
            let imageHeight = image.height;

            if (!imageWidth && !imageHeight) {
                imageWidth = 350;
                imageHeight = 350;
            }

            image.style.position = `absolute`
            image.style.top = `${heightImage - imageHeight / 2}px`
            image.style.left = `${widthImage - imageWidth / 2}px`
            image.alt = `Человек`;

            // @ts-ignore
            peopleWrapper.current!.appendChild(image)

            setCount(0);
        }
    }

  return (
    <div id="media" ref={peopleWrapper} onMouseMove={onMouseMove} className={styles['people']}>
      <div className={styles['people-text']}>
        <h2 data-people-title className={classNames(styles['people-title'], 'magic-text')}>Медийные личности</h2>
      </div>
    </div>
  );
};

export default PeoplePage;
