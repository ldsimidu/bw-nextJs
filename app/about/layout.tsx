import { ReactNode } from "react";

export const metadata = {
    title: "About"
}

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h2>About Layout</h2>
            {children}
        </div>
    )
};

export default Layout