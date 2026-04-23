
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { DoughnutChart } from './DoughnutChart';
import { bikeOwnership } from '@/config/surveyData';
import { Bike, Home } from 'lucide-react';

export function BikeOwnership() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">电动自行车保有量</h2>
          <p className="text-lg text-muted-foreground">刚性需求分析</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="border-2 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">保有量分布</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <DoughnutChart 
                  data={bikeOwnership}
                  height={350}
                  centerText={`${bikeOwnership[0].percentage}%`}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Bike className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  刚性需求
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                  问卷中超8成家庭拥有电动自行车
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  属于刚性、高频、全民性民生需求，并非小众诉求。
                  尽快建设合规充电桩，可从源头杜绝"飞线充电、入户充电"等重大消防风险。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Home className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                  样本代表性
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  调查样本覆盖小区全楼栋，无单一楼栋集中偏差。
                  样本更偏重有电动自行车业主的意见，确保数据真实有效。
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <StatItem
                label="拥有电动车"
                value={`${bikeOwnership[0].value}户`}
                percentage={bikeOwnership[0].percentage}
                color="blue"
              />
              <StatItem
                label="无电动车"
                value={`${bikeOwnership[1].value}户`}
                percentage={bikeOwnership[1].percentage}
                color="gray"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatItemProps {
  label: string;
  value: string;
  percentage: number;
  color: 'blue' | 'gray';
}

function StatItem({ label, value, percentage, color }: StatItemProps) {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    gray: 'bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-700',
  };

  return (
    <Card className={`border-2 ${colorClasses[color]}`}>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="text-lg font-semibold">{percentage}%</p>
      </CardContent>
    </Card>
  );
}