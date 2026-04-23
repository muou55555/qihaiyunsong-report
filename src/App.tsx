import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ConstructionAttitude } from './components/ConstructionAttitude';
import { BikeOwnership } from './components/BikeOwnership';
import { ReasonAnalysis } from './components/ReasonAnalysis';
import { CoreRequirements } from './components/CoreRequirements';
import { ResidentSuggestions } from './components/ResidentSuggestions';
import { Conclusion } from './components/Conclusion';
import { Badge } from './components/ui/badge';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 固定导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                V1.0
              </Badge>
              <span className="font-bold text-lg hidden sm:inline">
                充电设施调查
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 移动端导航 */}
        <div className="md:hidden overflow-x-auto border-t bg-background">
          <div className="flex gap-1 px-4 py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="pt-24 md:pt-16">
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
          aria-label="返回顶部"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* 页脚 */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            栖海澐颂小区电动自行车充电设施民意调查问卷数据分析报告
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            V1.0 | 调查日期：2026年4月14日 | 有效问卷：213份
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;