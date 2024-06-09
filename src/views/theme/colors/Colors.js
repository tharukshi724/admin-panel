import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { rgbToHex } from '@coreui/utils'
import {
  CCard,
  CCol,
  CCardHeader,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CNavLink,
} from '@coreui/react'

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
        <tr>
          <td className="text-body-secondary">HEX:</td>
          <td className="font-weight-bold">{rgbToHex(color)}</td>
        </tr>
        <tr>
          <td className="text-body-secondary">RGB:</td>
          <td className="font-weight-bold">{color}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
      <div className={classes} style={{ paddingTop: '75%' }}></div>
      {children}
      <ThemeView />
    </CCol>
  )
}

const tableExample = [
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  {
    jobTitle: 'Doctor',
    JobLocation: 'Colombo',
    WorkplaceType: 'abcd',
    EmploymentType: 'ancd',
  },
  // Additional entries
]

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Received Opportunities</CCardHeader>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center"></CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Job title</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Job location
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Workplace type</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  Employment type
                </CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center"></CTableDataCell>
                  <CTableDataCell>
                    <div>{item.jobTitle}</div>
                    <div className="small text-body-secondary text-nowrap"></div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div className="fw-semibold">{item.JobLocation}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex justify-content-between text-nowrap">
                      <div className="fw-semibold">{item.WorkplaceType}</div>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div className="fw-semibold">{item.EmploymentType}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex justify-content-space-between">
                      <CButton color="success" shape="rounded-0">
                        Approve
                      </CButton>
                      <CButton color="danger" shape="rounded-0">
                        Reject
                      </CButton>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
