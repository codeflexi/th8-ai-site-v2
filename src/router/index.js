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

// Existing solution views
import AccountingApFnbStoryView from '../views/AccountingApFnbStory.vue'
import AccountingApFnbMockupView from '../views/AccountingApFnbMockup.vue'
import KnowledgeAnalyticsView from '../views/solutions/KnowledgeAnalyticsView.vue'
import LogisticsControlTowerStoryView from '../views/solutions/LogisticsControlTowerStoryView.vue'
import LogisticsControlTowerMockupView from '../views/solutions/LogisticsControlTowerMockupView.vue'
import ProductionQualityIncidentStoryView from '../views/solutions/ProductionQualityIncidentStory.vue'
import ProductionQualityIncidentMockupView from '../views/solutions/ProductionQualityIncidentMockup.vue'
import CustomerComplaintRetentionStoryView from '../views/solutions/CustomerComplaintRetentionStory.vue'
import CustomerComplaintRetentionMockupView from '../views/solutions/CustomerComplaintRetentionMockup.vue'

// NEW: Pillar landing + detail views
import PillarAgentView from '../views/pillars/PillarAgentView.vue'
import PillarWorkflowView from '../views/pillars/PillarWorkflowView.vue'
import PillarKnowledgeView from '../views/pillars/PillarKnowledgeView.vue'

import AgentInventoryDemoView from '../views/pillars/AgentInventoryDemo.vue'
import AgentFpaDemoView from '../views/pillars/AgentFpaDemo.vue'


import WorkflowLineOrderView from '../views/pillars/WorkflowLineOrder.vue'
import WorkflowOrderStockLoadingView from '../views/pillars/WorkflowOrderStockLoading.vue'
import WorkflowProcurementApView from '../views/pillars/WorkflowProcurementAp.vue'

// ⭐ NEW: Backoffice Agent Console (Pillar 1 screen hub)
import Pillar1BackofficeHomeView from '../views/pillars/Pillar1BackofficeHome.vue'

// ⭐ NEW: Backoffice Agent Detail Screens
import Pillar1BackofficeFpaView from '../views/pillars/Pillar1BackofficeFpa.vue'
import Pillar1BackofficeInventoryView from '../views/pillars/Pillar1BackofficeInventory.vue'

// NEW: Pillar 3 admin
import BackofficeConsoleView from '../views/pillars/BackofficeConsole.vue'

// ⭐ NEW: Pillar 2 – Sales mockup screen
import Pillar2SaleView from '../views/pillars/Pillar2Sale.vue'
import Pillar2StockView from '../views/pillars/Pillar2Stock.vue'
import Pillar2ProcurementkView from '../views/pillars/Pillar2Procurement.vue'
import Pillar1BackofficeFpaDetail from '../views/pillars/Pillar1BackofficeFpaDetail.vue'  


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

  // Accounting AP F&B
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

  // Existing solutions
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

  // Pillar landing pages
  { path: '/pillars/agent-suite', name: 'pillar-agent', component: PillarAgentView },
  { path: '/pillars/workflow-automation', name: 'pillar-workflow', component: PillarWorkflowView },
  { path: '/pillars/knowledge-analytics', name: 'pillar-knowledge', component: PillarKnowledgeView },

  // Pillar 1 demos
  {
    path: '/pillars/agent-suite/inventory',
    name: 'agent-inventory-demo',
    component: AgentInventoryDemoView,
  },
  {
    path: '/pillars/agent-suite/fpa',
    name: 'agent-fpa-demo',
    component: AgentFpaDemoView,
  },

  // Pillar 1 – Backoffice Screens
  {
    path: '/pillars/agent-suite/backoffice',
    name: 'pillar1-backoffice-home',
    component: Pillar1BackofficeHomeView,
  },
  {
    path: '/pillars/agent-suite/backoffice/fpa',
    name: 'pillar1-backoffice-fpa',
    component: Pillar1BackofficeFpaView,
  },
  {
    path: '/pillars/agent-suite/backoffice/inventory',
    name: 'pillar1-backoffice-inventory',
    component: Pillar1BackofficeInventoryView,
  },

  // Pillar 2 flows
  {
    path: '/pillars/workflow/line-order-sync',
    name: 'workflow-line-order',
    component: WorkflowLineOrderView,
  },
  {
    path: '/pillars/workflow/order-stock-loading',
    name: 'workflow-order-stock-loading',
    component: WorkflowOrderStockLoadingView,
  },
  {
    path: '/pillars/workflow/procurement-ap',
    name: 'workflow-procurement-ap',
    component: WorkflowProcurementApView,
  },

  // ⭐ Pillar 2 – Sales mockup screen
  {
    path: '/pillars/workflow/sale-mockup',
    name: 'pillar2-sale-mockup',
    component: Pillar2SaleView,
  },

   // ⭐ Pillar 2 – Stock mockup screen
  {
    path: '/pillars/workflow/stock-mockup',
    name: 'pillar2-stock-mockup',
    component: Pillar2StockView,
  },

   // ⭐ Pillar 2 – Procurement mockup screen
  {
    path: '/pillars/workflow/procurement-mockup',
    name: 'pillar2-procurement-mockup',
    component: Pillar2ProcurementkView,
  },

    // ⭐ Pillar 1 – FPA Detail screen
  {
    path: '/pillars/agent-suite/backoffice/fpa-detail',
    name: 'pillar1-fpa-detail',
    component: Pillar1BackofficeFpaDetail,

    
  },

  // Pillar 3 Backoffice
  {
    path: '/backoffice/console',
    name: 'backoffice-console',
    component: BackofficeConsoleView,
  },

  // Deep pages
  { path: '/playbook', name: 'playbook', component: PlaybookView },
  { path: '/services-deep', name: 'services-deep', component: ServicesViewDeep },
  { path: '/methodology-deep', name: 'what-we-do-deep', component: MethodologyDeep },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
