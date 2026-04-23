
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart } from './BarChart';
import { opposeReasons, supportReasons } from '@/config/surveyData';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export function ReasonAnalysis() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">原因深度分析</h2>
          <p className="text-lg text-muted-foreground">业主态度背后的核心考量</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 反对原因分析 */}
          <div className="space-y-6">
            <Card className="border-2 border-red-200 dark:border-red-900 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  红线内建设反对原因
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <BarChart 
                    data={opposeReasons.map(r => ({
                      label: r.reason,
                      count: r.count,
                      percentage: r.percentage,
                    }))}
                    color="rgb(239, 68, 68)"
                    height={320}
                  />
                </div>

                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">核心担忧</h4>
                  <p className="text-sm text-red-600 dark:text-red-300 leading-relaxed">
                    业主反对核心集中在消防安全、公共空间、影响房价、噪音、消防通道占用，
                    完全契合政府消防整治、城市治理、民生安全工作导向。
                    红线内建设与安全治理要求冲突，不可行、不宜推。
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  {opposeReasons.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border"
                    >
                      <span className="text-sm font-medium flex-1">{item.reason}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{item.count}次</span>
                        <span className="font-bold text-red-600 dark:text-red-400 min-w-[60px] text-right">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 支持原因分析 */}
          <div className="space-y-6">
            <Card className="border-2 border-green-200 dark:border-green-900 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                  红线外建设支持原因
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <BarChart 
                    data={supportReasons.map(r => ({
                      label: r.reason,
                      count: r.count,
                      percentage: r.percentage,
                    }))}
                    color="rgb(34, 197, 94)"
                    height={320}
                  />
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">核心优势</h4>
                  <p className="text-sm text-green-600 dark:text-green-300 leading-relaxed">
                    红线外方案完全契合消防独立设置规范，同时解决安全、空间、邻里矛盾三大核心问题，
                    是政府、社区、业主三方共赢的合规方案，可落地、可推广、可评优。
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  {supportReasons.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border"
                    >
                      <span className="text-sm font-medium flex-1">{item.reason}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{item.count}次</span>
                        <span className="font-bold text-green-600 dark:text-green-400 min-w-[60px] text-right">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}