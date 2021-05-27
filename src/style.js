import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav_root: {
    flexGrow: 1,
  },
  root: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
  },
  container: {
    background: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img_box: {
    height: 250,
    width: 200,
    borderColor: "red",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 200,
    width: "100%",
    objectFit: "contain",
  },
  img2: {
    height: 400,
    width: "100%",
    objectFit: "contain",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav_left: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    right: 0,
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
  },
}));

export default useStyles;
