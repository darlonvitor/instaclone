import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"

// Instead of adding the Sidebar component to every page, we can only once to the PageLayout component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <Flex>
            {/* Sidebar on the left */}
            {pathname !== "/auth" ? (
                <Box w={{ base: "60px", md: "240px" }} >
                    <Sidebar />
                </Box>
            ) : null}

            {/* Page content on the right */}
            <Box flex={1} w={{ base: "calc(100%-60px)", md: "calc(100%-240px)" }}>
                {children}
            </Box>
        </Flex >
    )
}

export default PageLayout