import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart } from './BarChart';
import { PieChart } from './PieChart';

import { coreRequirements, walkabilityAcceptance, projectApproval } from '@/config/surveyData';
import { Shield, MapPin, CheckCircle2 } from 'lucide-react';

export function CoreRequirements() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心诉求与认可度</h2>
          <p className="text-lg text-muted-foreground">业主对充电设施的具体要求</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 核心诉求 */}
          <Card className="lg:col-span-2 border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-8 h-8 text-blue-500" />
                充电设施核心诉求
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <BarChart 
                  data={coreRequirements.map(r => ({
                    label: r.requirement,
                    count: r.count,
                    percentage: r.percentage,
                  }))}
                  color="rgb(59, 130, 246)"
                  height={280}
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">诉求特点</h4>
                <p className="text-sm text-blue-600 dark:text-blue-300 leading-relaxed">
                  业主诉求均为合规、基础、可实现的民生要求，无过度诉求。
                  按此标准建设，可打造"消防安全+便民惠民"示范项目，符合政府民生工程导向。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coreRequirements.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border"
                  >
                    <span className="text-sm font-medium flex-1">{item.requirement}</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[70px] text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 步行可达性 */}
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-500" />
                步行可达性
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <PieChart 
                  data={walkabilityAcceptance}
                  height={200}
                />
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-3">
                <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                  超93%业主接受步行5分钟内，便捷性可保障，无民生障碍。
                  只要选址合理，即可实现"安全+便民"双重目标。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 项目同意度 */}
        <Card className="mt-8 border-2 border-purple-200 dark:border-purple-900 hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-purple-500" />
              项目推进同意度
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <PieChart data={projectApproval} height={280} />
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">群众基础</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-300 leading-relaxed">
                    99.53%业主支持琚琚等几位邻居联合多部门推进，业主高度配合、无抵触。
                    政府牵头推进此项工作，群众基础好、协调成本低、维稳风险为零。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-200 dark:border-green-900">
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                      {projectApproval[0].percentage}%
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      同意/中立
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {projectApproval[0].value}户
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-200 dark:border-red-900">
                    <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                      {projectApproval[1].percentage}%
                    </p>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      反对
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {projectApproval[1].value}户
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}