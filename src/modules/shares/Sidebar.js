import React from 'react'

function Sidebar() {
  return (
    <div className="flex-shrink-0 py-5">
      <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">M-System</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed disabled" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            Home
          </button>
          <div className="collapse" id="home-collapse" >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed disabled" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            Dashboard
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed disabled" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Reports
          </button>
          <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
            </ul>
          </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed disabled" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
              <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
