import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCardHeader,
  CCard,
  CCardBody,
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const acceptanceRate = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>
                Detailed analytics on individual proposal performance (views, interactions)
              </strong>
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
    </div>
  )
}

export default acceptanceRate
