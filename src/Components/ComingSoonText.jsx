import "../index.css";

function Text(props) {
  return (
    <p
      style={{
        fontFamily: "Playwrite NZ",
        fontSize: "50px",
        color: "#d98351",
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      {props.text}
    </p>
  );
}

export default Text;
