import sizes from "./sizes";
import bg from "./bg2.svg";
const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    // backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#1e8feb",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflow: "scroll",
  },
  heading: {
    fontSize: "4rem",
    [sizes.down("xl")]: {
      fontSize: "3rem",
    },
    [sizes.down("xs")]: {
      fontSize: "3rem",
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
      backgroundColor: "#eb3d30",
      padding: "7px 10px",
      textAlign: "center",
      textDecoration: " none",
      border: "none",
      WebkitTransitionDuration: "0.4s",
      transitionDuration: "0.4s",
      overflow: "hidden",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "25px",
      ".a:after": {
        content: '""',
        background: "#90EE90",
        display: "block",
        position: "absolute",
        paddingTop: "300%",
        paddingLeft: "350%",
        marginLeft: "-20px !important",
        marginTop: "-120%",
        opacity: 0,
        transition: "all 0.8s",
      },
      ".a:active:after": {
        padding: "0",
        margin: "0",
        opacity: 1,
        transition: "0s",
      },
      [sizes.down("xl")]: {
        fontSize: "18px",
      },
      [sizes.down("xs")]: {
        fontSize: "15px",
      },
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "3rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
  button: {
    backgroundColor: "red",
    transform: "scale(0.8)",
    transition: "100ms cubic-bezier(0, 0.8, 0.13, 1)",
    "&:hover": {
      transform: "scale(1)",
    },
  },
};
export default styles;
