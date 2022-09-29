interface IInstructions3DProps {
  setInstructionsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Instructions3D({
  setInstructionsShow,
}: IInstructions3DProps): JSX.Element {
  return (
    <div id="instructions-3d">
      <h3>Welcome to my portfolio!</h3>
      <p>Use arrow keys to move around</p>
      <p>Fly through portals to visit different pages</p>
      <p>Click the 'Toggle 2D/3D' button (top left) to change to 2D/3D mode</p>
      <p onClick={() => setInstructionsShow(false)} className="fake-button">
        Start
      </p>
    </div>
  );
}
