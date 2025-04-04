import { Layout } from "../pages/layout"
import { Home } from "../pages/home"
import { Footer } from "../pages/footer"
import {Routes, Route} from "react-router-dom"
import { Start } from "../pages/start"
export const App = () => {
  return(
    <>
      <div>
        <Layout />
        <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/start" element={<Start />}/>
        </Routes>
        <Footer />
      </div>
    </>
  )
}