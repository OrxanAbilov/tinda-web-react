import React from 'react'

export default function DashBoard() {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body rounded-soft bg-gradient">
          <div className="row text-white align-items-center no-gutters">
            <div className="col">
              <h4 className="text-white mb-0">Today $764.39</h4>
              <p className="fs--1 font-weight-semi-bold">Yesterday <span className="opacity-50">$684.87</span></p>
            </div>
            <div className="col-auto d-none d-sm-block">
              <select className="custom-select custom-select-sm mb-3" id="dashboard-chart-select">
                <option value="all">All Payments</option>
                <option value="successful" defaultValue={'successful'}>Successful Payments</option>
                <option value="failed">Failed Payments</option>
              </select>
            </div>
          </div>
          <canvas className="max-w-100 rounded" id="chart-line" width="1618" height="375" aria-label="Line chart" role="img"></canvas>
        </div>
      </div>
      <div className="card bg-light mb-3">
        <div className="card-body p-3">
          <p className="fs--1 mb-0"><a href="#!"><span className="fas fa-exchange-alt mr-2" data-fa-transform="rotate-90"></span>A payout for <strong>$921.42 </strong>was deposited 13 days ago</a>. Your next deposit is expected on <strong>Tuesday, March 13.</strong></p>
        </div>
      </div>
      <div className="card-deck">
        <div className="card mb-3 overflow-hidden" style={{ min0width: '12rem' }}>
          <div className="bg-holder bg-card" style={{ backgroundimage: 'url(%PUBLIC_URL%/assets/img/illustrations/corner-1.png)' }}>
          </div>

          <div className="card-body position-relative">
            <h6>Customers<span className="badge badge-soft-warning rounded-capsule ml-2">-0.23%</span></h6>
            <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-warning">58.39k</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">See all<span className="fas fa-angle-right ml-1" data-fa-transform="down-1"></span></a>
          </div>
        </div>
        <div className="card mb-3 overflow-hidden" style={{ minwidth: '12rem' }}>
          <div className="bg-holder bg-card" style={{ backgroundimage: 'url(%PUBLIC_URL%/assets/img/illustrations/corner-2.png)' }}>
          </div>

          <div className="card-body position-relative">
            <h6>Orders<span className="badge badge-soft-info rounded-capsule ml-2">0.0%</span></h6>
            <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-info">73.46k</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">All orders<span className="fas fa-angle-right ml-1" data-fa-transform="down-1"></span></a>
          </div>
        </div>
        <div className="card mb-3 overflow-hidden" style={{ minwidth: '12rem' }}>
          <div className="bg-holder bg-card" style={{ backgroundimage: 'url(%PUBLIC_URL%/assets/img/illustrations/corner-3.png)' }}>
          </div>

          <div className="card-body position-relative">
            <h6>Revenue<span className="badge badge-soft-success rounded-capsule ml-2">9.54%</span></h6>
            <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif" data-countup='{"count":43594,"format":"comma","prefix":"$"}'>0</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">Statistics<span className="fas fa-angle-right ml-1" data-fa-transform="down-1"></span></a>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-sm-auto d-flex align-items-center pr-0">
              <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Recent Purchases</h5>
            </div>
            <div className="col-6 col-sm-auto ml-auto text-right pl-0">
              <div className="d-none" id="purchases-actions">
                <div className="input-group input-group-sm">
                  <select className="custom-select cus" aria-label="Bulk actions">
                    <option defaultValue={''}>Bulk actions</option>
                    <option value="Refund">Refund</option>
                    <option value="Delete">Delete</option>
                    <option value="Archive">Archive</option>
                  </select>
                  <button className="btn btn-falcon-default btn-sm ml-2" type="button">Apply</button>
                </div>
              </div>
              <div id="dashboard-actions">
                <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">New</span></button>
                <button className="btn btn-falcon-default btn-sm mx-2" type="button"><span className="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Filter</span></button>
                <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Export</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body px-0 pt-0">
          <div className="dashboard-data-table">
            <table className="table table-sm table-dashboard fs--1 data-table border-bottom" data-options='{"responsive":false,"pagingType":"simple","lengthChange":false,"searching":false,"pageLength":8,"columnDefs":[{"targets":[0,6],"orderable":false}],"language":{"info":"_START_ to _END_ Items of _TOTAL_ — <a href=\"#!\" className=\"font-weight-semi-bold\"> view all <span className=\"fas fa-angle-right\" data-fa-transform=\"down-1\"></span> </a>"},"buttons":["copy","excel"]}'>
              <thead className="bg-200 text-900">
                <tr>
                  <th className="no-sort pr-1 align-middle data-table-row-bulk-select">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select" id="checkbox-bulk-purchases-select" type="checkbox" data-checkbox-body="#purchases" data-checkbox-actions="#purchases-actions" data-checkbox-replaced-element="#dashboard-actions" />
                      <label className="custom-control-label" htmlFor="checkbox-bulk-purchases-select"></label>
                    </div>
                  </th>
                  <th className="sort pr-1 align-middle">Customer</th>
                  <th className="sort pr-1 align-middle">Email</th>
                  <th className="sort pr-1 align-middle">Product</th>
                  <th className="sort pr-1 align-middle text-center">Payment</th>
                  <th className="sort pr-1 align-middle text-right">Amount</th>
                  <th className="no-sort pr-1 align-middle data-table-row-action"></th>
                </tr>
              </thead>
              <tbody id="purchases">
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                      <label className="custom-control-label" htmlFor="checkbox-0"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Sylvia Plath</a></th>
                  <td className="align-middle">john@gmail.com</td>
                  <td className="align-middle">Slick - Drag &amp; Drop Bootstrap Generator</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$99</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown0" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown0">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-1" />
                      <label className="custom-control-label" htmlFor="checkbox-1"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Homer</a></th>
                  <td className="align-middle">sylvia@mail.ru</td>
                  <td className="align-middle">Bose SoundSport Wireless Headphones</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$634</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown1" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown1">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-2" />
                      <label className="custom-control-label" htmlFor="checkbox-2"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Edgar Allan Poe</a></th>
                  <td className="align-middle">edgar@yahoo.com</td>
                  <td className="align-middle">All-New Fire HD 8 Kids Edition Tablet</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-secondary">Blocked<span className="ml-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$199</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown2" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown2">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-3" />
                      <label className="custom-control-label" htmlFor="checkbox-3"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">William Butler Yeats</a></th>
                  <td className="align-middle">william@gmail.com</td>
                  <td className="align-middle">Apple iPhone XR (64GB)</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$798</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown3" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown3">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-4" />
                      <label className="custom-control-label" htmlFor="checkbox-4"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Rabindranath Tagore</a></th>
                  <td className="align-middle">tagore@twitter.com</td>
                  <td className="align-middle">ASUS Chromebook C202SA-YS02 11.6&quot;</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-secondary">Blocked<span className="ml-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$318</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown4" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown4">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-5" />
                      <label className="custom-control-label" htmlFor="checkbox-5"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Emily Dickinson</a></th>
                  <td className="align-middle">emily@gmail.com</td>
                  <td className="align-middle">Mirari OK to Wake! Alarm Clock &amp; Night-Light</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-warning">Pending<span className="ml-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$11</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown5" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown5">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-6" />
                      <label className="custom-control-label" htmlFor="checkbox-6"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Giovanni Boccaccio</a></th>
                  <td className="align-middle">giovanni@outlook.com</td>
                  <td className="align-middle">Summer Infant Contoured Changing Pad</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$31</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown6" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown6">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-7" />
                      <label className="custom-control-label" htmlFor="checkbox-7"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Oscar Wilde</a></th>
                  <td className="align-middle">oscar@hotmail.com</td>
                  <td className="align-middle">Munchkin 6 Piece Fork and Spoon Set</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$43</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown7" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown7">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-8" />
                      <label className="custom-control-label" htmlFor="checkbox-8"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">John Doe</a></th>
                  <td className="align-middle">doe@gmail.com</td>
                  <td className="align-middle">Falcon - Responsive Dashboard Template</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-success">Success<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$57</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown8" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown8">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-9" />
                      <label className="custom-control-label" htmlFor="checkbox-9"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Emma Watson</a></th>
                  <td className="align-middle">emma@gmail.com</td>
                  <td className="align-middle">Apple iPhone XR (64GB)</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-secondary">Blocked<span className="ml-1 fas fa-ban" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$999</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown9" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown9">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="btn-reveal-trigger">
                  <td className="align-middle">
                    <div className="custom-control custom-checkbox">
                      <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-10" />
                      <label className="custom-control-label" htmlFor="checkbox-10"></label>
                    </div>
                  </td>
                  <th className="align-middle"><a href="pages/customer-details.html">Sylvia Plath</a></th>
                  <td className="align-middle">plath@yahoo.com</td>
                  <td className="align-middle">All-New Fire HD 8 Kids Edition Tablet</td>
                  <td className="align-middle text-center fs-0"><span className="badge badge rounded-capsule badge-soft-warning">Pending<span className="ml-1 fas fa-stream" data-fa-transform="shrink-2"></span></span>
                  </td>
                  <td className="align-middle text-right">$199</td>
                  <td className="align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                      <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="dropdown10" data-toggle="dropdown" data-boundary="html" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                      <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="dropdown10">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Refund</a>
                          <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-4 pr-lg-2">
          <div className="card h-100 bg-gradient">
            <div className="card-header bg-transparent">
              <h5 className="text-white">Active users right now</h5>
              <div className="real-time-user display-1 font-weight-normal text-white" data-countup='{"count":119}'>0</div>
            </div>
            <div className="card-body text-white fs--1">
              <p className="border-bottom pb-2" style={{ bordercolor: 'rgba(255, 255, 255, 0.15) !important' }}>Page views per second</p>
              <canvas className="max-w-100" id="real-time-user" width="10" height="4"></canvas>
              <div className="list-group-flush mt-4">
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1 font-weight-semi-bold border-top-0" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">Top Active Pages</p>
                  <p className="mb-0">Active Users</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">/bootstrap-themes/</p>
                  <p className="mb-0">3</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">/tags/html5/</p>
                  <p className="mb-0">3</p>
                </div>
                <div className="list-group-item bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">/</p>
                  <p className="mb-0">2</p>
                </div>
                <div className="list-group-item bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">/preview/falcon/dashboard/</p>
                  <p className="mb-0">2</p>
                </div>
                <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-1" style={{ bordercolor: 'rgba(255, 255, 255, 0.05)' }}>
                  <p className="mb-0">/100-best-themes...all-time/</p>
                  <p className="mb-0">1</p>
                </div>
              </div>
            </div>
            <div className="card-footer text-right bg-transparent border-top" style={{ bordercolor: 'rgba(255, 255, 255, 0.15) !important' }}><a className="text-white" href="#!">Real-time report<span className="fa fa-chevron-right ml-1 fs--1"></span></a></div>
          </div>
        </div>
        <div className="col-lg-8 pl-lg-2">
          <div className="card h-100 mt-3 mt-lg-0">
            <div className="card-header bg-light d-flex flex-between-center">
              <h5 className="mb-0">Active users</h5>
              <div className="dropdown text-sans-serif btn-reveal-trigger">
                <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal" type="button" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                <div className="dropdown-menu dropdown-menu-right border py-0">
                  <div className="bg-white py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item" href="#!">Move</a><a className="dropdown-item" href="#!">Resize</a>
                    <div className="dropdown-divider"></div><a className="dropdown-item text-warning" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body h-100 p-0">
              <div className="h-100 bg-white" id="map" style={{ minheight: '300px' }}></div>
            </div>
            <div className="card-footer bg-light">
              <div className="row justify-content-between">
                <div className="col-auto">
                  <select className="custom-select custom-select-sm">
                    <option value="week" defaultValue={'week'}>Last 7 days</option>
                    <option value="month">Last month</option>
                    <option value="year">Last year</option>
                  </select>
                </div>
                <div className="col-auto"><a className="btn btn-falcon-default btn-sm" href="#!"><span className="d-none d-sm-inline-block mr-1">Location</span>overview<span className="fa fa-chevron-right ml-1 fs--1"></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
