import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Test",
    email: "test@gmail.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;