import { Button, Typography } from "@material-ui/core";

interface Props {
  error: string;
  name: string;
  onRetry: () => {};
}

export default function Retry({ error, name, onRetry }: Props) {
  return (
    <div>
      <Typography variant="body2" gutterBottom>
        {error}
      </Typography>
      <Button
        onClick={onRetry}
        variant="contained"
        color="primary"
        disableElevation
      >
        {name}
      </Button>
    </div>
  );
}
