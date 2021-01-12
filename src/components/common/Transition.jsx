import transition_svg from "../../medias/icons/shell.svg"

function Transition({nb}) {
    return (
      <div className={`transition ${nb}`}>
        <img className="transition__logo" src={transition_svg} alt="shell" />
      </div>
    );
  }
  
  export default Transition;
  