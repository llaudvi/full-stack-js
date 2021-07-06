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
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  Favorite,
  FavoriteBorderOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import { ProductItemShape } from "interface/ProductItemShape";

interface Props extends ProductItemShape {}

export default function ProductItem({
  id,
  name,
  description,
  image,
  price,
  category,
}: Props) {
  const history = useHistory();
  const [isLiked, setLiked] = useState(false);

  return (
    <Grid item md={3}>
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
              {description}
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
