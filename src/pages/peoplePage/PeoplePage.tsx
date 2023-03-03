import {FC, useEffect, useRef, useState} from 'react';
import styles from './PeoplePage.module.scss';

const PeoplePage: FC = () => {
    const [heightImage, setHeightImage] = useState(0);
    const [widthImage, setWidthImage] = useState(0);
    const [count, setCount] = useState(0);
    const [peopleImageCount, setPeopleImageCount] = useState(1);

    const peopleWrapper = useRef(null);

    useEffect(() => {
        setCount(prevState => prevState + 1);

        if (count >= 50) {

            if (peopleImageCount === 15) {
                setPeopleImageCount(1)
            } else {
                setPeopleImageCount(prevState => prevState + 1)
            }

            const image = document.createElement('img');
            image.src = `/assets/images/people-${peopleImageCount}.png`;

            let imageWidth = image.width;
            let imageHeight = image.height;

            console.log(image.width)

            image.style.top = `${heightImage - imageHeight / 2}px`
            image.style.position = `absolute`
            image.style.left = `${widthImage - imageWidth / 2}px`
            image.alt = `Человек`;

            // @ts-ignore
            peopleWrapper.current!.appendChild(image)

            setCount(0);
        }

    }, [heightImage, widthImage]);

    const onMouseMove = (event: any) => {
        setWidthImage(event.clientX);
        setHeightImage(event.clientY);
    }

  return (
    <div ref={peopleWrapper} onMouseMove={onMouseMove} className={styles['people']}>
      <div className={styles['people-text']}>
        <h2 className={styles['people-title']}>Медийные</h2>
        <h2 className={styles['people-title']}>личности</h2>
      </div>
    </div>
  );
};

export default PeoplePage;
