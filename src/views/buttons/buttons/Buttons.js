import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { cilBell } from '@coreui/icons'
import { DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Number of opportunities posted</strong>
          </CCardHeader>
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
      </CCol>
    </CRow>
  )
}

export default Buttons
