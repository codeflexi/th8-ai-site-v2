import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import FinancialView from '../views/FinancialView.vue'
import WhatWeDoView from '../views/WhatWeDoView.vue'
import AboutView from '../views/AboutView.vue'
import CaseStudiesView from '../views/CaseStudiesView.vue'
import ContactView from '../views/ContactView.vue'
import PlanSphereView from '../views/PlanSphereView.vue'
import PlanSphereThView from '../views/PlanSphereThView.vue'
import PlanSphereFlowView from '../views/PlanSphereFlowView.vue'
import FpaPlaybookView from '../views/FpaPlaybookView.vue'
import FpaCaseStudiesView from '../views/FpaCaseStudiesView.vue'
// Deep / technical versions
import ServicesViewDeep from '../views/ServicesView.vue'
import MethodologyDeep from '../views/WhatWeDoView.vue'
import PlaybookView from '../views/PlaybookView.vue'

// ⬇️ เพิ่มสองอันนี้
import AccountingApFnbStoryView from '../views/AccountingApFnbStory.vue'
import AccountingApFnbMockupView from '../views/AccountingApFnbMockup.vue'

import KnowledgeAnalyticsView from '../views/solutions/KnowledgeAnalyticsView.vue'
import LogisticsControlTowerStoryView from '../views/solutions/LogisticsControlTowerStoryView.vue'
import LogisticsControlTowerMockupView from '../views/solutions/LogisticsControlTowerMockupView.vue'

import ProductionQualityIncidentStoryView from '../views/solutions/ProductionQualityIncidentStory.vue'
import ProductionQualityIncidentMockupView from '../views/solutions/ProductionQualityIncidentMockup.vue'
import CustomerComplaintRetentionStoryView from '../views/solutions/CustomerComplaintRetentionStory.vue'
import CustomerComplaintRetentionMockupView from '../views/solutions/CustomerComplaintRetentionMockup.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/solutions', name: 'solutions', component: SolutionsView },
  { path: '/financial', name: 'financial', component: FinancialView },
  { path: '/methodology', name: 'what-we-do', component: WhatWeDoView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/case-studies', name: 'case-studies', component: CaseStudiesView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/plansphere', name: 'PlanSphere', component: PlanSphereView },
  { path: '/plansphere/th', name: 'plansphere-th', component: PlanSphereThView },
  { path: '/plansphere/flow', name: 'plansphere-flow', component: PlanSphereFlowView },
  { path: '/plansphere/playbook', name: 'fpa-playbook', component: FpaPlaybookView },
  { path: '/plansphere/case-studies', name: 'fpa-cases', component: FpaCaseStudiesView },

  // ⬇️ ใหม่: Accounting AP F&B – Story + Mockup
  {
    path: '/solutions/accounting-ap-fnb',
    name: 'accounting-ap-fnb',
    component: AccountingApFnbStoryView,
  },
  {
    path: '/solutions/accounting-ap-fnb/mockup',
    name: 'accounting-ap-fnb-mockup',
    component: AccountingApFnbMockupView,
  },

  {
    path: '/solutions/knowledge-suite/mockup',
    name: 'knowledge-suite',
    component: KnowledgeAnalyticsView,
  },
  
{
  path: '/solutions/logistics-control-tower',
  name: 'logistics-control-tower',
  component: LogisticsControlTowerStoryView,
},
{
  path: '/solutions/logistics-control-tower/mockup',
  name: 'logistics-control-tower-mockup',
  component: LogisticsControlTowerMockupView,
},

 // Production & Quality Incident Agent
  {
    path: '/solutions/production-quality-incident',
    name: 'production-quality-incident',
    component: ProductionQualityIncidentStoryView,
  },
  {
    path: '/solutions/production-quality-incident/mockup',
    name: 'production-quality-incident-mockup',
    component: ProductionQualityIncidentMockupView,
  },

  // Customer Complaint & Retention Agent
  {
    path: '/solutions/customer-complaint-retention',
    name: 'customer-complaint-retention',
    component: CustomerComplaintRetentionStoryView,
  },
  {
    path: '/solutions/customer-complaint-retention/mockup',
    name: 'customer-complaint-retention-mockup',
    component: CustomerComplaintRetentionMockupView,
  },



  // Deep / implementation views (for working with clients)
  { path: '/playbook', name: 'playbook', component: PlaybookView },
  { path: '/services-deep', name: 'services-deep', component: ServicesViewDeep },
  { path: '/methodology-deep', name: 'what-we-do-deep', component: MethodologyDeep },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
