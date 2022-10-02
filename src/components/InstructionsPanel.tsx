export default function InstructionsPanel(): JSX.Element {
  return (
    <div className="instructions-panel">
      <p id="up-arrow">↑</p>
      <p id="left-arrow">←</p>
      <p id="down-arrow">↓</p>
      <p id="right-arrow">→</p>
      <p id="move-rocket"> - move rocket</p>
      <p id="move-camera">mouse - move camera</p>
    </div>
  );
}
