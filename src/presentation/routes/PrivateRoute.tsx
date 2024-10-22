import { DashBoardPage } from "@taskme//DashBoardPage"
import { Route, Routes } from "react-router-dom"





export const PrivateRoute = () => {
  return (
      <Routes>
          <Route  path="dashboard" element={<DashBoardPage/> } />
          <Route path="/*" element={<DashBoardPage/> } />
    </Routes>
  )
}