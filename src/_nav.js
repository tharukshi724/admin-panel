import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   to: '/ViewOpportunity',
  // },
  {
    component: CNavTitle,
    name: 'Activities',
  },
  {
    component: CNavItem,
    name: 'Opportunities',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'User Management',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Reports',
  },
  {
    component: CNavGroup,
    name: 'User Activity',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Active Users',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'New Registrations',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Retention Rates',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'User Metrics',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Proposal Statistics',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Posted Opportunities',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Proposals Submitted',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Acceptance Rates',
        to: '/buttons/dropdowns',
      },
      // {
      //   component: CNavItem,
      //   name: 'Most Active Users',
      //   to: '/buttons/MostUser',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Industry Insight',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Popular Categories',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Trends',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Financial Reports',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Subscription Revenue',
        to: 'forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Revenue Breakdown',
        to: 'forms/layout#form-grid',
      },
      {
        component: CNavItem,
        name: 'Payment History',
        to: 'forms/range',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Content Performance',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Opportunities',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Engaged Opportunities',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'System Health Monitoring',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'About Site',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Performance Metrics',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Troubleshooting Reports',
        to: '/notifications/modals',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Premium/Enterprise User Analytics and Reporting',
  },
  {
    component: CNavGroup,
    name: 'Proposal Performance',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Proposals Submitted',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Acceptance Rate',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Detailed Analytics',
        to: '/404',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Opportunity Insights',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Engagement Metrics',
        to: '/Metrics',
      },
      {
        component: CNavItem,
        name: 'Conversion Rates',
        to: '/ConverstaionRate',
      },
      {
        component: CNavItem,
        name: 'Average Response Time',
        to: '/ResponseRate',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Market & Industry Trends',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Industries',
        to: '/InsightIndustries',
      },
      {
        component: CNavItem,
        name: 'KPIs Tracking',
        to: '/KPITracking',
      },
      {
        component: CNavItem,
        name: 'Target Market',
        to: '/TargetMarket',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Success Metrics',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Outcome tracking',
        to: '/OutcomeTracking',
      },
      {
        component: CNavItem,
        name: 'ROI analysis',
        to: '/ROIAnalysis',
      },
    ],
  },
]

export default _nav
