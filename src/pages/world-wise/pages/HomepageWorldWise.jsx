import { Link } from 'react-router-dom';
import styles from './HomepageWorldWise.module.css';
import PageNav from './PageNav';

export default function HomepageWorldWise() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think of. Never forget your wonderful
          experiences, and show your friends how you have wandered the world.
        </h2>
        <Link className="cta" to={'/word-wise/login'}>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
