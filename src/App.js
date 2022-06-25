import { Routes, Route } from 'react-router-dom';
// import "./App.css";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
// import Inventory from './pages/Inventory/Inventory';
import Parser from './components/CSVParser/Parser';
import TableView from './pages/TableView/TableView';
import CardView from './pages/CardView/CardView';
import PageNotFound from './pages/404Page/PageNotFound';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="csv-table" element={<TableView />} />
        <Route path="csv-card" element={<CardView />} />
        <Route path="in" element={<Parser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
