import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from "./SearchBar";

test("SearchBar is returned", () => {
    render(<SearchBar />)
});