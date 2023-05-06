import {Component} from 'solid-js';
import styles from './index.module.css';

export const TopDiagram: Component<{
  u: number[][];
}> = props => {
  const u = props.u;
  return (
    <div class={styles.diagram}>
      <div class={styles.horizRow}>
        <div class={styles.corner} />
        <div class={u[0][1] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={u[0][2] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={u[0][3] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={styles.corner} />
      </div>
      <div class={styles.row}>
        <div class={u[1][0] ? styles.filledVert : styles.emptyVert} />
        <div class={u[1][1] ? styles.filled : styles.empty} />
        <div class={u[1][2] ? styles.filled : styles.empty} />
        <div class={u[1][3] ? styles.filled : styles.empty} />
        <div class={u[1][4] ? styles.filledVert : styles.emptyVert} />
      </div>
      <div class={styles.row}>
        <div class={u[2][0] ? styles.filledVert : styles.emptyVert} />
        <div class={u[2][1] ? styles.filled : styles.empty} />
        <div class={u[2][2] ? styles.filled : styles.empty} />
        <div class={u[2][3] ? styles.filled : styles.empty} />
        <div class={u[2][4] ? styles.filledVert : styles.emptyVert} />
      </div>
      <div class={styles.row}>
        <div class={u[3][0] ? styles.filledVert : styles.emptyVert} />
        <div class={u[3][1] ? styles.filled : styles.empty} />
        <div class={u[3][2] ? styles.filled : styles.empty} />
        <div class={u[3][3] ? styles.filled : styles.empty} />
        <div class={u[3][4] ? styles.filledVert : styles.emptyVert} />
      </div>
      <div class={styles.horizRow}>
        <div class={styles.corner} />
        <div class={u[4][1] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={u[4][2] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={u[4][3] ? styles.filledHoriz : styles.emptyHoriz} />
        <div class={styles.corner} />
      </div>
    </div>
  );
}
