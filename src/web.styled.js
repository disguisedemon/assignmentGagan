import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#01204e",
    color: "#fff",
    fontSize: 13,
    padding: "2px 0px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fc7c20",
    color: "#fff",
    padding: "15px, 3px",
    width: "80%",
    justifyContent: "center",
    marginTop: 20,
  },
  cardContainer: {
    margin: "10px",
    marginLeft: "15px",
  },
}));

export default useStyles;
