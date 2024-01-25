import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./components/profile";
import Stats from "./components/stats";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <Stats />
    </main>
  );
}
