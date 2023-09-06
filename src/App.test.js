import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import App from './App';

test("App is returned", () => {
    render(<App />);
});

test("Check if API returns correct data on input change and form submission", async () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText("Search by name...");
    fireEvent.change(inputField, { target: { value: 'Leanne' } });

    const searchIconBtn = screen.getByTestId("search-icon");
    fireEvent.click(searchIconBtn);

    await waitFor(() => {
        const userName = screen.getByTestId(/^user-name/);
        expect(userName).toHaveTextContent("Leanne");
    });
});

test("Check if input is no longer focused after input change", () => {
    jest.useFakeTimers();

    render(<App />);

    const inputField = screen.getByPlaceholderText("Search by name...");
    fireEvent.change(inputField, { target: { value: 'Leanne' } });
    
    act(() => {
        jest.advanceTimersByTime(999);
    });

    act(() => {
        jest.advanceTimersByTime(1);
    });

    expect(inputField).not.toHaveFocus();
});