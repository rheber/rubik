import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import {TopDiagram} from './TopDiagram';

const triggers = new Map();
triggers.set("airjeff", "R U2 R2 U' R2 U' R2 U2 R");
triggers.set("hedge", "F R' F' R");
triggers.set("sexy", "R U R' U'");
triggers.set("sledge", "R' F R F'");
triggers.set("sune", "R U R' U R U2 R");


const Triggers: Component<{
  triggers: Map<string, string>;
}> = (props) => {
  const [shortenerInput, setShortenerInput] = createSignal('');

  const shortenedAlg = () => {
    let result = shortenerInput().toLowerCase();

    let didShorten = true;
    while (didShorten) {
      didShorten = false;
      Array.from(props.triggers.entries()).forEach(e => {
        if (result.includes(e[1].toLowerCase())) {
          result = result.replaceAll(e[1].toLowerCase(), e[0]).toLowerCase();
          didShorten = true;
        }
      });
    }
    return result;
  };

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
      <div class={styles.header}>Shortener</div>
      <input value={shortenerInput()} onInput={e => setShortenerInput(e.target.value)} />
      <code>{shortenedAlg()}</code>
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
                    <div class={styles.column}>
                      <div class={styles.header}>OCLL</div>
                      <div class={styles.row}>
                        <div class={styles.column}>
                          OLL 21
                          <TopDiagram u={[[0,0,0,0,0],[1,0,1,0,1],[0,1,1,1,0],[1,0,1,0,1],[0,0,0,0,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 22
                          <TopDiagram u={[[0,0,0,1,0],[1,0,1,0,0],[0,1,1,1,0],[1,0,1,0,0],[0,0,0,1,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 23
                          <TopDiagram u={[[0,1,0,1,0],[0,0,1,0,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 24
                          <TopDiagram u={[[0,1,0,0,0],[0,0,1,1,0],[0,1,1,1,0],[0,0,1,1,0],[0,1,0,0,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 25
                          <TopDiagram u={[[0,0,0,1,0],[0,1,1,0,0],[0,1,1,1,0],[1,0,1,1,0],[0,0,0,0,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 26
                          <TopDiagram u={[[0,0,0,1,0],[1,0,1,0,0],[0,1,1,1,0],[0,0,1,1,0],[0,1,0,0,0]]} />
                        </div>
                        <div class={styles.column}>
                          OLL 27
                          <TopDiagram u={[[0,1,0,0,0],[0,0,1,0,1],[0,1,1,1,0],[0,1,1,0,0],[0,0,0,1,0]]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={styles.column}>PLL</div>
            </div>
          </div>
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
