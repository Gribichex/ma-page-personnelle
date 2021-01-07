import transition_svg from "../../medias/icons/shell.svg"

function Transition({nb}) {
    return (
      <div className={`transition ${nb}`}>
        <img className="logo d-block mx-auto" src={transition_svg} alt="shell" />
      </div>
    );
  }
  
  export default Transition;
  