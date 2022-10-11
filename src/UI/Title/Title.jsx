import styles from './TItle.module.css';

export const Title = ({ children, ...resProps }) => {
  return (
    <h1 {...resProps} className={styles.title}>
      {children}
    </h1>
  );
};
