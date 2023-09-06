import { render } from '@testing-library/react';
import UserList from "./UserList";
import { getAllUserData } from "../../api";

test("UserList is returned", async () => {
    const users = await getAllUserData(1);
    render(<UserList users={users} />);
});