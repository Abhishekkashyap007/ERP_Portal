import React from 'react'
import PanelHeader from './PanelHeader'
import Details from '../EmployeePanel/Details'
import Footerpage from '../modules/shares/Footerpage'


function Panel1() {
  return (
     <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <PanelHeader />
                </div>
            </div>
            <div className='row mainpage pt-5'>
                    <Details />
            <div className='row mt-5'>
                <div className='col-12'>
                    <Footerpage />
                </div>
            </div>
        </div>
        </div>
  )
}

export default Panel1
