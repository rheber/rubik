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
                          <div class={styles.alg}>y F (sexy)3 F'</div>
                        </div>
                        <div class={styles.column}>
                          OLL 22
                          <TopDiagram u={[[0,0,0,1,0],[1,0,1,0,0],[0,1,1,1,0],[1,0,1,0,0],[0,0,0,1,0]]} />
                          <div class={styles.alg}>Fw sexy Fw' F sexy F'</div>
                        </div>
                        <div class={styles.column}>
                          OLL 23
                          <TopDiagram u={[[0,1,0,1,0],[0,0,1,0,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0]]} />
                          <div class={styles.alg}>(sexy)3 (sledge)3</div>
                        </div>
                        <div class={styles.column}>
                          OLL 24
                          <TopDiagram u={[[0,1,0,0,0],[0,0,1,1,0],[0,1,1,1,0],[0,0,1,1,0],[0,1,0,0,0]]} />
                          <div class={styles.alg}>(sledge)3 (sexy)3</div>
                        </div>
                        <div class={styles.column}>
                          OLL 25
                          <TopDiagram u={[[0,0,0,1,0],[0,1,1,0,0],[0,1,1,1,0],[1,0,1,1,0],[0,0,0,0,0]]} />
                          <div class={styles.alg}>R' F' L' F R F' L F</div>
                        </div>
                        <div class={styles.column}>
                          OLL 26
                          <TopDiagram u={[[0,0,0,1,0],[1,0,1,0,0],[0,1,1,1,0],[0,0,1,1,0],[0,1,0,0,0]]} />
                          <div class={styles.alg}>antisune</div>
                        </div>
                        <div class={styles.column}>
                          OLL 27
                          <TopDiagram u={[[0,1,0,0,0],[0,0,1,0,1],[0,1,1,1,0],[0,1,1,0,0],[0,0,0,1,0]]} />
                          <div class={styles.alg}>sune</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={styles.column}>PLL</div>
                <div class={styles.row}>
                  <div class={styles.column}>1L</div>
                  <div class={styles.column}>
                    <div class={styles.header}>2L</div>
                    <div class={styles.column}>
                      <div class={styles.header}>Corners</div>
                      <div class={styles.row}>
                        <div class={styles.column}>
                          J-perm b
                          <TopDiagram u={[[0,5,5,4,0],[2,1,1,1,3],[2,1,1,1,3],[2,1,1,1,5],[0,3,4,4,0]]} />
                          <div class={styles.alg}>R U2 R' U' R U2 L' U R' U' L</div>
                        </div>
                        <div class={styles.column}>
                          N-perm a
                          <TopDiagram u={[[0,5,5,3,0],[2,1,1,1,2],[4,1,1,1,2],[4,1,1,1,4],[0,5,3,3,0]]} />
                          <div class={styles.alg}>(Rw' D Rw U2)5</div>
                        </div>
                      </div>
                    </div>
                    <div class={styles.column}>
                      <div class={styles.header}>Edges</div>
                      <div class={styles.row}>
                        <div class={styles.column}>
                          H-perm
                          <TopDiagram u={[[0,5,3,5,0],[2,1,1,1,4],[4,1,1,1,2],[2,1,1,1,4],[0,3,5,3,0]]} />
                          <div class={styles.alg}>M2 U M2 U2 M2 U M2</div>
                        </div>
                        <div class={styles.column}>
                          U-perm a
                          <TopDiagram u={[[0,5,2,5,0],[2,1,1,1,4],[4,1,1,1,5],[2,1,1,1,4],[0,3,3,3,0]]} />
                          <div class={styles.alg}>M2 U M' U2 M U M2</div>
                        </div>
                        <div class={styles.column}>
                          U-perm b
                          <TopDiagram u={[[0,5,4,5,0],[2,1,1,1,4],[5,1,1,1,2],[2,1,1,1,4],[0,3,3,3,0]]} />
                          <div class={styles.alg}>M2 U' M' U2 M U' M2</div>
                        </div>
                        <div class={styles.column}>
                          Z-perm
                          <TopDiagram u={[[0,5,2,5,0],[2,1,1,1,4],[5,1,1,1,3],[2,1,1,1,4],[0,3,2,3,0]]} />
                          <div class={styles.alg}>M2 U2 M U' M2 U' M2 U' M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
