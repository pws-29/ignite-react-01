import { Header } from "./components/Header";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          main content
        </main>
      </div>
    </div>
  );
};
