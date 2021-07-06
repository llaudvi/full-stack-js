import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Retry, ProductItem } from "components";

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

  const { loading, error, data, refetch } = useQuery(PRODUCT_DETAIL_QUERY, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading Item...</p>;
  if (error && !loading)
    return <Retry error={error.message} name="Try again" onRetry={refetch} />;

  return <h1>Hello World {productId}</h1>;
}
