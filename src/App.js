import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { EpisodesPage } from "./pages/EpisodesPage/EpisodesPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={'episodes'} />} />
        <Route path={'episodes'} element={<EpisodesPage />}/>
        <Route path={'characters'} element={<CharacterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App; 