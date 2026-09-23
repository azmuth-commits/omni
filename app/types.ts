export type InstitutionType = 'university' | 'college' | 'school';

export type ProductId = 'university-erp' | 'college-erp' | 'school-erp' | 'lms' | 'admissions-chatbot';

export interface ProductOffering {
  id: ProductId;
  name: string;
  category: string;
  badge: string;
  shortDesc: string;
  headline: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  keyCapabilities: string[];
  modules: {
    title: string;
    description: string;
    tag: string;
  }[];
  previewType: 'dashboard' | 'lms' | 'bot' | 'schedule' | 'parent-portal';
  color: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: 'security' | 'analytics' | 'mobile' | 'finance' | 'ai' | 'operations';
  icon: string;
  metric?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  location: string;
  institutionType: InstitutionType;
  avatar: string;
  impactMetric: string;
  impactLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'implementation' | 'security' | 'pricing' | 'integration';
}

export interface DemoFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  institutionName: string;
  institutionType: InstitutionType;
  studentCount: string;
  selectedModules: string[];
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  dataPayload?: {
    type: 'course_card' | 'tour_schedule' | 'lead_captured' | 'fee_breakdown';
    title?: string;
    details?: Record<string, string>;
  };
}
