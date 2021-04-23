function Container(props) {
  const fallback = {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    margin: "10px auto",
  };
  const style = props.style ? { ...fallback, ...props.style } : fallback;

  return <div style={style}>{props.children}</div>;
}

export default Container;
