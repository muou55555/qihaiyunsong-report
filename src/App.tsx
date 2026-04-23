import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ConstructionAttitude } from './components/ConstructionAttitude';
import { BikeOwnership } from './components/BikeOwnership';
import { ReasonAnalysis } from './components/ReasonAnalysis';
import { CoreRequirements } from './components/CoreRequirements';
import { ResidentSuggestions } from './components/ResidentSuggestions';
import { Conclusion } from './components/Conclusion';
import { Badge } from './components/ui/badge';
import { ArrowUp, Menu, X } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Update active section
      const sections = ['overview', 'attitude', 'ownership', 'reasons', 'requirements', 'suggestions', 'conclusion'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const sections = [
    { id: 'overview', label: '调查概况', component: <HeroSection /> },
    { id: 'attitude', label: '建设态度', component: <ConstructionAttitude /> },
    { id: 'ownership', label: '保有量', component: <BikeOwnership /> },
    { id: 'reasons', label: '原因分析', component: <ReasonAnalysis /> },
    { id: 'requirements', label: '核心诉求', component: <CoreRequirements /> },
    { id: 'suggestions', label: '居民建议', component: <ResidentSuggestions /> },
    { id: 'conclusion', label: '结论', component: <Conclusion /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* 固定导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                V1.0
              </Badge>
              <span className="font-bold text-lg text-white hidden sm:inline">
                充电设施调查
              </span>
            </div>
            
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 移动端导航 */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 py-4">
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg text-left transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 主内容 */}
      <main className="pt-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.component}
          </section>
        ))}
      </main>

      {/* 返回顶部按钮 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* 页脚 */}
      <footer className="bg-slate-900/50 border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-white/70">
            栖海澐颂小区电动自行车充电设施民意调查问卷数据分析报告
          </p>
          <p className="text-xs text-white/50 mt-2">
            V1.0 | 调查日期：2026年4月14日 | 有效问卷：213份
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;