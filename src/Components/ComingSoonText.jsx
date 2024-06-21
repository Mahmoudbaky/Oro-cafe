import "../index.css";

function Text(props) {
  return (
    <p
      style={{
        fontFamily: "Playwrite NZ",
        fontSize: "40px",
        color: "#eeaa79",
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      {props.text}
    </p>
  );
}

export default Text;
