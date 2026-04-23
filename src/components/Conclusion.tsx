import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { conclusion, surveyConfig } from '@/config/surveyData';
import { CheckCircle, ArrowRight, FileCheck, Info } from 'lucide-react';

export function Conclusion() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');

  const handleButtonClick = (type: string) => {
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">报告结论</h2>
          <p className="text-lg text-white/70">基于真实民意数据的决策建议</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* 主要结论 */}
          <Card className="border-4 border-green-500/50 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-xl hover:shadow-2xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-green-400">
                民意高度一致
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-center font-semibold text-white mb-6">
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
          <Card className="border-2 border-white/10 bg-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-white/90">
                <FileCheck className="w-8 h-8 text-blue-400" />
                关键数据
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400 mb-2">
                    {surveyConfig.totalResponses}
                  </p>
                  <p className="text-sm text-white/70">有效问卷（户）</p>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-red-400 mb-2">
                    {surveyConfig.summary.opposeRate}
                  </p>
                  <p className="text-sm text-white/70">反对红线内建设</p>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <p className="text-4xl font-bold text-green-400 mb-2">
                    {surveyConfig.summary.supportRate}
                  </p>
                  <p className="text-sm text-white/70">支持红线外建设</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 下一步计划 */}
          <Card className="border-2 border-blue-400/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-white/90">下一步计划</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-6 mb-6">
                <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed">
                  {conclusion.nextStep}
                </p>
              </div>

              {/* 提示信息 */}
              {showMessage && (
                <div className="mb-6 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 rounded-xl backdrop-blur-xl animate-fade-in">
                  <div className="flex items-start gap-4">
                    <Info className="w-8 h-8 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-xl font-semibold text-white mb-2">
                        {messageType === 'download' ? '下载完整报告' : '查看原始问卷'}
                      </p>
                      <p className="text-lg text-white/90 leading-relaxed">
                        由于信息保护，请联系栖海澐颂负责充电桩邻居
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-6 text-lg border-0"
                  onClick={() => handleButtonClick('download')}
                >
                  下载完整报告
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-white/30 text-white hover:bg-white/10"
                  onClick={() => handleButtonClick('survey')}
                >
                  查看原始问卷
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 报告信息 */}
          <div className="text-center space-y-2 pt-8 border-t border-white/10">
            <p className="text-lg font-semibold text-white/90">
              {surveyConfig.title}
            </p>
            <p className="text-white/70">
              {surveyConfig.subtitle} | {surveyConfig.version}
            </p>
            <p className="text-sm text-white/50">
              调查日期：{surveyConfig.surveyDate} | 有效问卷：{surveyConfig.totalResponses}份
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}