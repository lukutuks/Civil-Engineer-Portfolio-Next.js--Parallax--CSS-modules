import { Parallax } from "react-parallax";
import styles from '../styles/Image.module.css'
 const ImageTwo = () => {
  return (
 <div>
    <Parallax className={styles.image} bgImage="/images/background2.jpeg" strength={800}>
        <div className={styles.content}>
            <span className={styles.imgText}>JONAS PORTFOLIO</span>
        </div>
    </Parallax>
 </div>
    

  )
};

export default ImageTwo
