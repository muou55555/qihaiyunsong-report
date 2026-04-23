
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { residentSuggestions } from '@/config/surveyData';
import { MessageSquare } from 'lucide-react';

export function ResidentSuggestions() {
  const categories = [
    { id: 'quantity', title: '数量与布局', icon: '🔢', items: residentSuggestions.quantity },
    { id: 'price', title: '价格与收费', icon: '💰', items: residentSuggestions.price },
    { id: 'safety', title: '安全与消防', icon: '🔥', items: residentSuggestions.safety },
    { id: 'monitoring', title: '监控与门禁', icon: '🎥', items: residentSuggestions.monitoring },
    { id: 'location', title: '建设位置', icon: '📍', items: residentSuggestions.location },
    { id: 'management', title: '设施与管理', icon: '🛠️', items: residentSuggestions.management },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">邻居们的心声</h2>
          <p className="text-lg text-muted-foreground">小区充电设施建设居民建议</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="text-3xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((suggestion, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    >
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        "{suggestion}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 总结卡片 */}
        <Card className="mt-8 border-2 border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageSquare className="w-8 h-8 text-blue-500" />
              意见总结
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
              居民最集中的诉求为——数量充足、民用电价、带棚防雨、监控全覆盖、安全合规、红线外建设、刷卡门禁。
              同时希望加快进度，避免推诿。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}