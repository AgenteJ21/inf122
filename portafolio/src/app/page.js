import styles from "./page.module.css";
import Profile from "./components/profile";
import Stats from "./components/stats";
import ProfileButtons from "./components/profile-btns";
import PortfSkills from "./components/portf-skills";
import TabsImages from "./components/tabs-img";

export default function Home() {
  return (
    <div className={styles.main}>
      <Profile />
      <Stats />
      <ProfileButtons />
      <PortfSkills />
      <TabsImages />
    </div>
  );
}
