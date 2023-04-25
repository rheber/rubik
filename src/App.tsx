import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <div>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.header}>
            3x3x3
          </div>
          <div class={styles.row}>
            <div class={styles.column}>
              Beginner
            </div>
            <div class={styles.column}>
              <div class={styles.header}>
                CFOP
              </div>
              <div class={styles.column}>
                Cross
              </div>
              <div class={styles.column}>
                F2L
              </div>
              <div class={styles.column}>
                <div class={styles.header}>
                  OLL
                </div>
                <div class={styles.row}>
                  <div class={styles.column}>
                    1L
                  </div>
                  <div class={styles.column}>
                    <div class={styles.header}>
                      2L
                    </div>
                    <div class={styles.column}>
                      EOLL
                    </div>
                    <div class={styles.column}>
                      OCLL
                    </div>
                  </div>
                </div>
              </div>
              <div class={styles.column}>
                PLL
              </div>
            </div>
          </div>
        </div>
        <div class={styles.column}>
          <div class={styles.header}>
            4x4x4
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
