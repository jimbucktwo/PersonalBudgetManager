import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from './components/navigation';

export default function Home() {
  return (
    <div>
        <Image
        src="/globe.svg"
        alt="Budget Manager"
        width={500}
        height={300}
        className={styles.image}
      />
      <h1 className={styles.title}>Welcome to Budget Manager</h1>
      <p className={styles.description}>
        This is a simple budget management application.
      </p>
      <NavigationBar />
      <h1>Budgets</h1>
      <ul>
        <li>Budget 1</li>
        <li>Budget 2</li>
        <li>Budget 3</li>
      </ul>
      
    </div>
  );
}
