function TheLogo(props) {
  return (
    <>
      <img
        className="Thelogo"
        src={props.src}
        height={100}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      ></img>
    </>
  );
}

export default TheLogo;
