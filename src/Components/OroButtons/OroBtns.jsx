import styleButton from "./OroBtns.module.css";

function OroBtns(props) {
  return (
    <>
      <button className={styleButton.OroBtnStyle}>{props.name}</button>
    </>
  );
}

export default OroBtns;
