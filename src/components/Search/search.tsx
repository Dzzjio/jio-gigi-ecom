import { useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import Input from "../UI/Input";
import productServices from "../../services/ProductServices";
import useClickInside from "../../hooks/useClickInside";
import useClickOutside from "../../hooks/useClickOutside";
import { StyledSearchContainer, ResultsContainer, ResultItem, Loading, Error } from "./styled";
import { ProductI } from "../../types/product.interface";

const Search = () => {
    const SearchInput = useInput(() => true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [visible, setVisible] = useState(false);
    const [results, setResults] = useState<ProductI[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleSearch = (searchTerm: string) => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        setLoading(true);
        productServices
            .allProducts({ productName: searchTerm as string, page: 1, pageSize: 50 })
            .then(({ data }) => {
                if (!data.total || !data.products) {
                    setResults([]);
                    setError(true);
                    return;
                }
                setResults(data.products);
                setVisible(true);
            })
            .catch((error) => {
                console.log("❌ ~ .then ~ error:", error);
                setResults([]);
                setError(true);
            })
            .finally(() => setLoading(false));
    };

    const handleClickedInside = () => setVisible(true);
    const handleClickedOutside = () => setVisible(false);

    useDebounce(() => handleSearch(String(SearchInput.value)), 500, [SearchInput.value]);
    useClickInside(containerRef, handleClickedInside);
    useClickOutside(containerRef, handleClickedOutside);

    return (
        <StyledSearchContainer ref={containerRef}>
            <Input
                style={{width: '100%', padding: '15px', borderRadius: '5px', border: 'none'}}
                label=""
                {...SearchInput}
                placeholder="ძიება"
            />
            {visible && (
                <ResultsContainer>
                    {loading && <Loading>...loading</Loading>}
                    {error && !loading && <Error>Something went wrong. Please try again.</Error>}
                    {!loading && !error && results.length === 0 && <Error>No results found.</Error>}
                    {!loading && !error && results.map((product) => (
                        <ResultItem key={product.id}>
                            {product.title}
                        </ResultItem>
                    ))}
                </ResultsContainer>
            )}
        </StyledSearchContainer>
    );
};

export default Search;
