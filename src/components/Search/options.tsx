import { ProductI } from "../../types/product.interface";
import Option from "./option";

type OptionsProps = {
  loading: boolean;
  searchResults: ProductI[];
  error: boolean;
};

const Options = ({ loading, searchResults, error }: OptionsProps) => {
  return (
    <div >
      {!searchResults.length && (
        <div >
          {renderConditionals({ loading, error, length: searchResults.length })}
        </div>
      )}
      {searchResults.map((product, index) => (
        <Option key={index} {...product} />
      ))}
    </div>
  );
};

export default Options;

const renderConditionals = ({
  loading,
  error,
  length,
}: {
  loading: boolean;
  error: boolean;
  length: number;
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>No products Found</div>;
  if (!error && !loading && !length) return <div>Search for the products</div>;
  return null;
};