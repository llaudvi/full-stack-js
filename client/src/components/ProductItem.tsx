import { useState } from "react";
import {
  IconButton,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
  GridSize,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import { ProductItemShape } from "interface/ProductItemShape";

interface Props extends ProductItemShape {
  size?: GridSize;
}

export default function ProductItem({
  id,
  name,
  shortDescription,
  image,
  price,
  category,
  size = 3,
}: Props) {
  const history = useHistory();
  const [isLiked, setLiked] = useState(false);

  return (
    <Grid item md={size}>
      <Card>
        <CardActionArea onClick={() => history.push(`/product/${id}`)}>
          <CardMedia src={image} title={name} component="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="h6">
              ${price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => setLiked((prevState) => !prevState)}
          >
            {isLiked ? (
              <Favorite color="primary" />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </IconButton>
          <IconButton aria-label="add to card">
            <ShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
