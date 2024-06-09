import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { getIconsView } from '../brands/Brands.js'
import { flagSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'

const CoreUIIcons = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Most engaged opportunities (comments, messages)</CCardHeader>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCard className="mb-4">
                <CCardBody>
                  <CChartBar
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'Rates',
                          backgroundColor: '#f87979',
                          data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                      ],
                    }}
                    labels="months"
                  />
                </CCardBody>
              </CCard>
            </CCard>
          </CCol>
        </CRow>
      </CCard>
    </>
  )
}

export default CoreUIIcons
