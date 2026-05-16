import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import HistoryChannel from "@/pages/HistoryChannel";
import CultureChannel from "@/pages/CultureChannel";
import AcademicPage from "@/pages/AcademicPage";
import CommunityPage from "@/pages/CommunityPage";
import ArticleDetail from "@/pages/ArticleDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryChannel />} />
            <Route path="/culture" element={<CultureChannel />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/search" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="font-serif text-2xl font-bold text-gray-800">搜索结果</h1></div>} />
            <Route path="/topic/:id" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="font-serif text-2xl font-bold text-gray-800">专题详情</h1></div>} />
            <Route path="/history/dynasty/:id" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="font-serif text-2xl font-bold text-gray-800">朝代详情</h1></div>} />
            <Route path="/history/person/:id" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1 className="font-serif text-2xl font-bold text-gray-800">人物详情</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
