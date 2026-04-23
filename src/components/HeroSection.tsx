import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { surveyConfig } from '@/config/surveyData';
import { FileText, Users, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              {surveyConfig.version}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              {surveyConfig.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
              {surveyConfig.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              调查日期：{surveyConfig.surveyDate}
            </p>
          </div>

          {/* 核心数据卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              icon={<Users className="w-8 h-8" />}
              label="有效问卷"
              value={surveyConfig.totalResponses}
              suffix="户"
              color="blue"
            />
            <StatCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="支持红线外建设"
              value={surveyConfig.summary.supportRate}
              color="green"
            />
            <StatCard
              icon={<FileText className="w-8 h-8" />}
              label="反对红线内建设"
              value={surveyConfig.summary.opposeRate}
              color="red"
            />
            <StatCard
              icon={<CheckCircle className="w-8 h-8" />}
              label="同意项目推进"
              value={surveyConfig.summary.agreementRate}
              color="purple"
            />
          </div>

          {/* 核心信息 */}
          <Card className="max-w-3xl mx-auto border-2 border-green-200 dark:border-green-900 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-center">核心结论</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-center font-semibold text-green-600 dark:text-green-400">
                {surveyConfig.summary.keyMessage}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
  color: 'blue' | 'green' | 'red' | 'purple';
}

function StatCard({ icon, label, value, suffix, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    green: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    red: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
    purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  };

  return (
    <Card className={`border-2 hover:shadow-lg transition-all duration-300 ${colorClasses[color]}`}>
      <CardHeader className="pb-3">
        <div className={`w-16 h-16 rounded-full ${colorClasses[color].split(' ').slice(0, 2).join(' ')} flex items-center justify-center mx-auto mb-2`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-3xl font-bold">
          {value}{suffix}
        </p>
      </CardContent>
    </Card>
  );
}