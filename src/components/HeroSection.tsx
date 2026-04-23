import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { surveyConfig } from '@/config/surveyData';
import { Users, CheckCircle, Zap, Flame } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold border-2 border-blue-400/50 bg-blue-500/20">
              {surveyConfig.version}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              {surveyConfig.title}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-6">
              {surveyConfig.subtitle}
            </h2>
            <p className="text-lg text-white/70 mb-2">
              调查日期：{surveyConfig.surveyDate}
            </p>
          </div>

          {/* 核心数据卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              icon={<Users className="w-10 h-10" />}
              label="有效问卷"
              value={surveyConfig.totalResponses}
              suffix="户"
              color="blue"
              highlight="真实业主"
            />
            <StatCard
              icon={<CheckCircle className="w-10 h-10" />}
              label="支持红线外建设"
              value={surveyConfig.summary.supportRate}
              color="green"
              highlight="高度共识"
            />
            <StatCard
              icon={<Flame className="w-10 h-10" />}
              label="反对红线内建设"
              value={surveyConfig.summary.opposeRate}
              color="red"
              highlight="民意反对"
            />
            <StatCard
              icon={<Zap className="w-10 h-10" />}
              label="同意项目推进"
              value={surveyConfig.summary.agreementRate}
              color="purple"
              highlight="全力支持"
            />
          </div>

          {/* 核心信息 */}
          <Card className="max-w-4xl mx-auto border-4 border-green-500/50 bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-xl animate-slide-up glow-effect">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                核心结论
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl md:text-3xl text-center font-bold text-white leading-relaxed mb-4">
                {surveyConfig.summary.keyMessage}
              </p>
              <p className="text-center text-white/80 text-lg">
                基于真实民意数据，决策依据充分
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
  highlight?: string;
}

function StatCard({ icon, label, value, suffix, color, highlight }: StatCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      border: 'border-blue-400/50',
      value: 'from-blue-400 to-cyan-400',
    },
    green: {
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      border: 'border-green-400/50',
      value: 'from-green-400 to-emerald-400',
    },
    red: {
      bg: 'bg-red-500/20',
      text: 'text-red-400',
      border: 'border-red-400/50',
      value: 'from-red-400 to-orange-400',
    },
    purple: {
      bg: 'bg-purple-500/20',
      text: 'text-purple-400',
      border: 'border-purple-400/50',
      value: 'from-purple-400 to-pink-400',
    },
  };

  const classes = colorClasses[color];

  return (
    <Card className={`border-2 ${classes.border} bg-gradient-to-br ${classes.bg} backdrop-blur-xl hover:scale-105 transition-all duration-300 cursor-pointer group`}>
      <CardHeader className="pb-3">
        <div className={`w-20 h-20 rounded-full ${classes.bg} ${classes.text} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-white/70 mb-2 font-medium">{label}</p>
        <p className="stat-value mb-2 bg-gradient-to-r ${classes.value} bg-clip-text text-transparent">
          {value}
          {suffix && <span className="text-3xl ml-1">{suffix}</span>}
        </p>
        {highlight && (
          <Badge variant="secondary" className={`${classes.border} ${classes.text} text-xs`}>
            {highlight}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}