
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PieChart } from './PieChart';
import { DoughnutChart } from './DoughnutChart';
import { insideConstructionAttitude, outsideConstructionAttitude } from '@/config/surveyData';

export function ConstructionAttitude() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">建设态度分析</h2>
          <p className="text-lg text-muted-foreground">业主对充电设施建设位置的明确态度</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 红线内建设态度 */}
          <Card className="border-2 border-red-200 dark:border-red-900 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                红线内建设态度
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <PieChart 
                  data={insideConstructionAttitude}
                  height={300}
                />
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">结论</h4>
                <p className="text-sm text-red-600 dark:text-red-300 leading-relaxed">
                  近8成业主明确反对红线内建设，支持率不足5%，民意阻力极大。
                  红线内建设易引发业主投诉、邻里矛盾与消防安全隐患，不符合基层治理与民生维稳要求，不具备落地条件。
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {insideConstructionAttitude.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold">{item.percentage}%</span>
                      <span className="text-sm text-muted-foreground ml-1">({item.value}户)</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 红线外建设态度 */}
          <Card className="border-2 border-green-200 dark:border-green-900 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                红线外建设态度
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <DoughnutChart 
                  data={outsideConstructionAttitude}
                  height={300}
                  centerText="97.2%"
                />
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">结论</h4>
                <p className="text-sm text-green-600 dark:text-green-300 leading-relaxed">
                  97.2%业主压倒性支持红线外建设，0反对，形成全小区高度共识。
                  该方案是唯一能同时满足业主充电刚需、消防安全、居住品质的最优路径，
                  民意基础牢固、推进风险极低。
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {outsideConstructionAttitude.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold">{item.percentage}%</span>
                      <span className="text-sm text-muted-foreground ml-1">({item.value}户)</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}