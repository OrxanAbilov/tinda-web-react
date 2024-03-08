import React from 'react'

export default function Income() {
    return (
        <>
            <div className="card mb-3">
                <div className="card-header">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-4 col-sm-auto d-flex align-items-center pr-0">
                            <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Gələnlər</h5>
                        </div>
                        <div className="col-8 col-sm-auto ml-auto text-right pl-0">
                            <div className="d-none" id="orders-actions">
                                <div className="input-group input-group-sm">
                                    <select className="custom-select cus" aria-label="Bulk actions">
                                        <option defaultValue={""}>Bulk actions</option>
                                        <option value="Refund">Refund</option>
                                        <option value="Delete">Delete</option>
                                        <option value="Archive">Archive</option>
                                    </select>
                                    <button className="btn btn-falcon-default btn-sm ml-2" type="button">Apply</button>
                                </div>
                            </div>
                            <div id="dashboard-actions">
                                <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-plus" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Yeni Sənəd Əlavə et</span></button>
                                <button className="btn btn-falcon-default btn-sm mx-2" type="button"><span className="fas fa-filter" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Filterlər</span></button>
                                <button className="btn btn-falcon-default btn-sm" type="button"><span className="fas fa-external-link-alt" data-fa-transform="shrink-3 down-2"></span><span className="d-none d-sm-inline-block ml-1">Export</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className="falcon-data-table">
                        <table className="table table-sm mb-0 table-striped table-dashboard fs--1 data-table border-bottom border-200" data-options='{"searching":false,"responsive":false,"info":false,"lengthChange":false,"sWrapper":"falcon-data-table-wrapper","dom":"<&#39;row mx-1&#39;<&#39;col-sm-12 col-md-6&#39;l><&#39;col-sm-12 col-md-6&#39;f>><&#39;table-responsive&#39;tr><&#39;row no-gutters px-1 py-3 align-items-center justify-content-center&#39;<&#39;col-auto&#39;p>>","language":{"paginate":{"next":"<span className=\"fas fa-chevron-right\"></span>","previous":"<span className=\"fas fa-chevron-left\"></span>"}}}'>
                            <thead className="bg-200 text-900">
                                <tr>
                                    <th className="align-middle no-sort">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input checkbox-bulk-select" id="checkbox-bulk-purchases-select" type="checkbox" data-checkbox-body="#orders" data-checkbox-actions="#orders-actions" data-checkbox-replaced-element="#dashboard-actions" />
                                                <label className="custom-control-label" htmlFor="checkbox-bulk-purchases-select"></label>
                                        </div>
                                    </th>
                                    <th className="align-middle sort">Sənəd Nömrəsi</th>
                                    <th className="align-middle sort pr-7">Sənəd Tarixi</th>
                                    <th className="align-middle sort" style={{minwidth: '5rem'}}>Sənəd Növü</th>
                                    <th className="align-middle sort text-center">Göndərən</th>
                                    <th className="align-middle sort text-center">Status</th>
                                    <th className="no-sort"></th>
                                </tr>
                            </thead>
                            <tbody id="orders">
                                <tr className="btn-reveal-trigger">
                                    <td className="py-2 align-middle">
                                        <div className="custom-control custom-checkbox">
                                            <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                                            <label className="custom-control-label" htmlFor="checkbox-0"></label>
                                        </div>
                                    </td>
                                    <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                                    <td className="py-2 align-middle">20/04/2019</td>
                                    <td className="py-2 align-middle">Kassa Tələb Sənədi</td>
                                    <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli</td>
                                <td className="py-2 align-middle text-right fs-0 font-weight-medium"><span className="badge badge rounded-capsule d-block badge-soft-success">Tamamlandı<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span></td>
                                <td className="py-2 align-middle white-space-nowrap">
                                    <div className="dropdown text-sans-serif">
                                        <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                        <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                                            <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                                                <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="btn-reveal-trigger">
                                <td className="py-2 align-middle">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                                        <label className="custom-control-label" htmlFor="checkbox-0"></label>
                                    </div>
                                </td>
                                <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                                <td className="py-2 align-middle">20/04/2019</td>
                                <td className="py-2 align-middle">Məzuniyyət Ərizəsi</td>
                                <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
                            </td>
                            <td className="py-2 align-middle text-center fs-0 white-space-nowrap"><span className="badge badge rounded-capsule d-block badge-soft-primary">Davam edir<span className="ml-1 fas fa-redo" data-fa-transform="shrink-2"></span></span></td>
                            <td className="py-2 align-middle white-space-nowrap">
                                <div className="dropdown text-sans-serif">
                                    <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                    <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className="btn-reveal-trigger">
                            <td className="py-2 align-middle">
                                <div className="custom-control custom-checkbox">
                                    <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                                    <label className="custom-control-label" htmlFor="checkbox-0"></label>
                                </div>
                            </td>
                            <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                            <td className="py-2 align-middle">20/04/2019</td>
                            <td className="py-2 align-middle">Kassa Tələb Sənədi</td>
                            <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
                        </td>
                        <td className="py-2 align-middle text-center fs-0 white-space-nowrap"><span className="badge badge rounded-capsule d-block badge-soft-secondary">Gözləmədə<span className="ml-1 fas fa-ban" data-fa-transform="shrink-2"></span></span></td>
                        <td className="py-2 align-middle white-space-nowrap">
                            <div className="dropdown text-sans-serif">
                                <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                                    <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr className="btn-reveal-trigger">
                        <td className="py-2 align-middle">
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                                <label className="custom-control-label" htmlFor="checkbox-0"></label>
                            </div>
                        </td>
                        <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                        <td className="py-2 align-middle">20/04/2019</td>
                        <td className="py-2 align-middle">İcazə Sənədi</td>
                        <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
                    </td>
                    <td className="py-2 align-middle text-right fs-0 font-weight-medium"><span className="badge badge rounded-capsule d-block badge-soft-success">Tamamlandı<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span></td>
                    <td className="py-2 align-middle white-space-nowrap">
                        <div className="dropdown text-sans-serif">
                            <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                            <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                                <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr className="btn-reveal-trigger">
                    <td className="py-2 align-middle">
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                            <label className="custom-control-label" htmlFor="checkbox-0"></label>
                        </div>
                    </td>
                    <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                    <td className="py-2 align-middle">20/04/2019</td>
                    <td className="py-2 align-middle">Kassa Tələb Sənədi</td>
                    <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
                </td>
                <td className="py-2 align-middle text-center fs-0 white-space-nowrap"><span className="badge badge rounded-capsule d-block badge-soft-warning">Ləğv edildi<span className="ml-1 fas fa-stream" data-fa-transform="shrink-2"></span></span></td>
                <td className="py-2 align-middle white-space-nowrap">
                    <div className="dropdown text-sans-serif">
                        <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                        <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                            <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                                <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

            <tr className="btn-reveal-trigger">
                <td className="py-2 align-middle">
                    <div className="custom-control custom-checkbox">
                        <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                        <label className="custom-control-label" htmlFor="checkbox-0"></label>
                    </div>
                </td>
                <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                <td className="py-2 align-middle">20/04/2019</td>
                <td className="py-2 align-middle">Kassa Tələb Sənədi</td>
                <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
            </td>
            <td className="py-2 align-middle text-right fs-0 font-weight-medium"><span className="badge badge rounded-capsule d-block badge-soft-success">Tamamlandı<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span></td>
            <td className="py-2 align-middle white-space-nowrap">
                <div className="dropdown text-sans-serif">
                    <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                    <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                        <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                            <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                        </div>
                    </div>
                </div>
            </td>
        </tr>

                    <tr className="btn-reveal-trigger">
                      <td className="py-2 align-middle">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input checkbox-bulk-select-target" type="checkbox" id="checkbox-0" />
                          <label className="custom-control-label" htmlFor="checkbox-0"></label>
                        </div>
                      </td>
                      <td className="py-2 align-middle white-space-nowrap">01234567890</td>
                      <td className="py-2 align-middle">20/04/2019</td>
                      <td className="py-2 align-middle">Kassa Tələb Sənədi</td>
                      <td className="py-2 align-middle text-center fs-0 white-space-nowrap">Əliyev Vəli
                      </td>
                      <td className="py-2 align-middle text-right fs-0 font-weight-medium"><span className="badge badge rounded-capsule d-block badge-soft-success">Tamamlandı<span className="ml-1 fas fa-check" data-fa-transform="shrink-2"></span></span></td>
                      <td className="py-2 align-middle white-space-nowrap">
                        <div className="dropdown text-sans-serif">
                          <button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3" type="button" id="order-dropdown-0" data-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                          <div className="dropdown-menu dropdown-menu-right border py-0" aria-labelledby="order-dropdown-0">
                            <div className="bg-white py-2"><a className="dropdown-item" href="#!">Completed</a><a className="dropdown-item" href="#!">Processing</a><a className="dropdown-item" href="#!">On Hold</a><a className="dropdown-item" href="#!">Pending</a>
                              <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Delete</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr >
                    
                    
                  </tbody >
                </table >
              </div >
            </div >
          </div >
    </>
  )
}
