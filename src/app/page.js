import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles['letter-image']}>
      <div className={styles['animated-mail']}>
        <div className={styles['back-fold']}></div>
        <div className={styles['letter']}>
          <div className={styles['letter-frame']}>
            <p className={styles['letter-text']}>Will you be my Valentine?</p>
          </div>
        </div>

        {[...Array(15)].map((_, index) => {
          return (
            <div
              key={index}
              className={styles['heart']}
              style={{
                left: `calc(${Math.random() * 100}% + 50px)`,
                top: `${Math.random() * 50}%`,
                animationDuration: `${Math.random() * 3 + 1}s`,
              }}
            ></div>
          );
        })}

        <div className={styles['top-fold']}></div>
        <div className={styles['body']}></div>
        <div className={styles['left-fold']}></div>
      </div>
      <div className={styles['shadow']}></div>
    </div>
  );
}
