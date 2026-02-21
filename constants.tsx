
import React from 'react';
import { Gift, Heart, Home, BarChart3, Users, Zap } from 'lucide-react';

export const NAV_ITEMS = [
  { label: '핵심서비스', href: '#pillars' },
  { label: '마케팅전략', href: '#strategy' },
  { label: '주요성과', href: '#facts' },
];

export const PILLARS = [
  {
    title: '이벤트 경품 대행',
    description: '기획부터 배송, CS까지 완벽한 풀필먼트 서비스를 제공합니다. 데이터 기반의 투명한 관리 시스템으로 기업의 신뢰를 높입니다.',
    icon: <Gift className="w-8 h-8" />,
    iconColor: 'text-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    tags: ['Reward Logistics', 'CS Management', 'Data Report']
  },
  {
    title: '문화 혜택 서비스',
    description: '영화, 공연, 전시 등 풍부한 문화 인프라를 활용한 멤버십 복지 및 마케팅 툴을 제안합니다. 고객의 감성을 자극하는 고부가가치 서비스입니다.',
    icon: <Heart className="w-8 h-8" />,
    iconColor: 'text-rose-500',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    tags: ['Culture Welfare', 'VIP Membership', 'Emotional Marketing']
  },
  {
    title: '베베하우스',
    description: '20년 전통의 대한민국 대표 육아 커뮤니티. 타겟팅된 임신/출산/육아 DB를 기반으로 정교한 타겟 마케팅 솔루션을 제공합니다.',
    icon: <Home className="w-8 h-8" />,
    iconColor: 'text-amber-500',
    imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800',
    tags: ['Target Marketing', 'Parenting Community', 'Data Analysis']
  }
];

export const STRATEGIES = [
  {
    title: 'Insight Driven',
    description: '시장과 소비자의 니즈를 정확히 파악하여 실질적인 성과를 만들어내는 인사이트를 도출합니다.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Execution Power',
    description: '기획에만 그치지 않고 운영부터 사후 관리까지 책임지는 강력한 실행력을 보유하고 있습니다.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Network Effect',
    description: '베베하우스를 포함한 다양한 채널과 인프라를 통해 마케팅 시너지를 극대화합니다.',
    icon: <Users className="w-6 h-6" />
  }
];
