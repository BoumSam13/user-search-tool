import { render } from '@testing-library/react';
import User from "./User";
import { getAllUserData } from "../../api";

test("User is returned", async () => {
    const users = await getAllUserData(1);
    render(<User user={users[0]} />);
});