import type { Component } from 'solid-js';

import styles from './App.module.css';

const triggers = new Map();
triggers.set("airjeff", "R U2 R2 U' R2 U' R2 U2 R");
triggers.set("hedge", "F R' F' R");
triggers.set("sexy", "R U R' U'");
triggers.set("sledge", "R' F R F'");
triggers.set("sune", "R U R' U R U2 R");

const Triggers: Component<{
  triggers: Map<string, string>;
}> = (props) => {
  return (
    <div class={styles.section}>
      <div class={styles.header}>Triggers</div>
      <div class={styles.column}>
        {Array.from(props.triggers.entries()).map((e, _idx) => {
          return (
            <div class={styles.row}>
              <div class={styles.column}>{e[0]}</div>
              <code class={styles.alg}>{e[1]}</code>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Methods: Component = () => {
  return (
    <div class={styles.section}>
      <div class={styles.header}>Methods</div>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.header}>3x3x3</div>
          <div class={styles.row}>
            <div class={styles.column}>Beginner</div>
            <div class={styles.column}>
              <div class={styles.header}>CFOP</div>
              <div class={styles.column}>Cross</div>
              <div class={styles.column}>F2L</div>
              <div class={styles.column}>
                <div class={styles.header}>OLL</div>
                <div class={styles.row}>
                  <div class={styles.column}>1L</div>
                  <div class={styles.column}>
                    <div class={styles.header}>2L</div>
                    <div class={styles.column}>EOLL</div>
                    <div class={styles.column}>OCLL</div>
                  </div>
                </div>
              </div>
              <div class={styles.column}>PLL</div>
            </div>
          </div>
        </div>
        <div class={styles.column}>
          <div class={styles.header}>4x4x4</div>
        </div>
      </div>
    </div>
  );
};

const App: Component = () => {
  return (
    <div>
      <Methods />
      <Triggers triggers={triggers} />
    </div>
  );
};

export default App;
