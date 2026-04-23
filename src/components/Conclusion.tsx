
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { conclusion, surveyConfig } from '@/config/surveyData';
import { CheckCircle, ArrowRight, FileCheck } from 'lucide-react';

export function Conclusion() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">报告结论</h2>
          <p className="text-lg text-muted-foreground">基于真实民意数据的决策建议</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 主要结论 */}
          <Card className="border-4 border-green-500 dark:border-green-600 hover:shadow-2xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-green-700 dark:text-green-400">
                民意高度一致
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-center font-semibold text-slate-800 dark:text-slate-200 mb-6">
                坚决反对红线内、全力支持红线外建设充电桩
              </p>
              
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-900 rounded-lg p-6">
                <p className="text-lg text-green-700 dark:text-green-400 leading-relaxed text-center">
                  数据真实、诉求合理、配合度高，恳请尽快予以支持落地
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 数据总结 */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <FileCheck className="w-8 h-8 text-blue-500" />
                关键数据
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {surveyConfig.totalResponses}
                  </p>
                  <p className="text-sm text-muted-foreground">有效问卷（户）</p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                    {surveyConfig.summary.opposeRate}
                  </p>
                  <p className="text-sm text-muted-foreground">反对红线内建设</p>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {surveyConfig.summary.supportRate}
                  </p>
                  <p className="text-sm text-muted-foreground">支持红线外建设</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 下一步计划 */}
          <Card className="border-2 border-blue-200 dark:border-blue-900 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">下一步计划</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6">
                <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                  {conclusion.nextStep}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                >
                  下载完整报告
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  查看原始问卷
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 报告信息 */}
          <div className="text-center space-y-2 pt-8 border-t">
            <p className="text-lg font-semibold">
              {surveyConfig.title}
            </p>
            <p className="text-muted-foreground">
              {surveyConfig.subtitle} | {surveyConfig.version}
            </p>
            <p className="text-sm text-muted-foreground">
              调查日期：{surveyConfig.surveyDate} | 有效问卷：{surveyConfig.totalResponses}份
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}