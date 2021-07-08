import { useQuery, gql } from "@apollo/client";
import { Grid, Container } from "@material-ui/core";
import { Retry, ProductItem } from "components";
import { ProductItemShape } from "interface/ProductItemShape";

export default function Products() {
  const { loading, error, data, refetch } = useQuery<{
    allProducts: ProductItemShape[];
  }>(gql`
    query allProducts {
      allProducts {
        id
        name
        shortDescription
        image
        category
        price
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error && !loading)
    return <Retry error={error.message} name="Retry Fetch" onRetry={refetch} />;

  let content;
  if (data && data.allProducts) {
    content = data.allProducts.map((item: ProductItemShape) => (
      <ProductItem
        key={item.id}
        id={item.id}
        name={item.name}
        shortDescription={item.shortDescription}
        image={item.image}
        price={item.price}
        category={item.category}
      />
    ));
  } else {
    content = <p>No Products available.</p>;
  }

  return (
    <Container style={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {content}
      </Grid>
    </Container>
  );
}
