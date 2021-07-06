import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Grid, Paper, Container, Typography } from "@material-ui/core";
import { Retry, ProductItem } from "components";
import { ProductItemShape } from "interface/ProductItemShape";

const PRODUCT_DETAIL_QUERY = gql`
  query product($id: String!) {
    getProduct(id: $id) {
      id
      name
      description
      price
      category
      image
    }
  }
`;

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();

  const { loading, error, data, refetch } = useQuery<{
    getProduct: ProductItemShape;
  }>(PRODUCT_DETAIL_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading Item...</p>;
  if (error && !loading)
    return (
      <Retry error={error.message} name="Try again" onRetry={() => refetch} />
    );

  let content;
  if (data && data.getProduct) {
    const { getProduct } = data;
    content = (
      <ProductItem
        size={12}
        id={getProduct.id}
        name={getProduct.name}
        shortDescription={getProduct.shortDescription}
        image={getProduct.image}
        price={getProduct.price}
        category={getProduct.category}
      />
    );
  }

  return (
    <Container style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {content}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            autem sequi, odit rerum iste blanditiis consequuntur. Odit,
            explicabo dolorem illo tempora ullam exercitationem nihil. Aperiam
            repellat est consequuntur asperiores odit?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
