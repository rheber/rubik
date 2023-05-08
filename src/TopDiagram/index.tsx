import {Component} from 'solid-js';
import styles from './index.module.css';

export const TopDiagram: Component<{
  u: number[][];
}> = props => {
  const u = props.u;

  const mapToFill = (i: number): string => {
    switch(i) {
      case 1: return '#ff0';
      case 2: return '#00f';
      case 3: return '#f00';
      case 4: return '#0f0';
      case 5: return '#ffa500';
      default: return '#fff';
    }
  };

  return (
    <div class={styles.diagram}>
      <div class={styles.horizRow}>
        <div class={styles.corner} />
        <div style={`background-color: ${mapToFill(u[0][1])};`} class={styles.horiz} />
        <div style={`background-color: ${mapToFill(u[0][2])};`} class={styles.horiz} />
        <div style={`background-color: ${mapToFill(u[0][3])};`} class={styles.horiz} />
        <div class={styles.corner} />
      </div>
      <div class={styles.row}>
        <div style={`background-color: ${mapToFill(u[1][0])};`} class={styles.vert} />
        <div style={`background-color: ${mapToFill(u[1][1])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[1][2])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[1][3])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[1][4])};`} class={styles.vert} />
      </div>
      <div class={styles.row}>
        <div style={`background-color: ${mapToFill(u[2][0])};`} class={styles.vert} />
        <div style={`background-color: ${mapToFill(u[2][1])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[2][2])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[2][3])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[2][4])};`} class={styles.vert} />
      </div>
      <div class={styles.row}>
        <div style={`background-color: ${mapToFill(u[3][0])};`} class={styles.vert} />
        <div style={`background-color: ${mapToFill(u[3][1])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[3][2])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[3][3])};`} class={styles.square} />
        <div style={`background-color: ${mapToFill(u[3][4])};`} class={styles.vert} />
      </div>
      <div class={styles.horizRow}>
        <div class={styles.corner} />
        <div style={`background-color: ${mapToFill(u[4][1])};`} class={styles.horiz} />
        <div style={`background-color: ${mapToFill(u[4][2])};`} class={styles.horiz} />
        <div style={`background-color: ${mapToFill(u[4][3])};`} class={styles.horiz} />
        <div class={styles.corner} />
      </div>
    </div>
  );
}
