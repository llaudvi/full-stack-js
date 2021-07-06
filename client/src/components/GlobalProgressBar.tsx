import {
  createStyles,
  LinearProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useNetworkNotifier } from "config/NetworkNotifier";

export default function GlobalProgressBar() {
  const classes = useStyles();
  const status = useNetworkNotifier();

  if (status.numPendingQueries > 0 || status.numPendingMutations > 0)
    return <LinearProgress className={classes.progress} color="primary" />;

  return null;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      position: "fixed",
      overflow: "hidden",
      width: "100%",
      zIndex: 10,
      top: 0,
    },
  })
);
