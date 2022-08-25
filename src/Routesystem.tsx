import { Route, Routes } from "react-router-dom"
import { RequireAuth } from "./Contexts/Auth/RequeireAuth"
import { Home } from "./pages/Home"
import { Private } from "./pages/Private"

export const RoutList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
            <Route path="/signOut" element={<Home />} />

        </Routes>
    )
}