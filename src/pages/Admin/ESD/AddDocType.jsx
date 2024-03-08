import React, { useState } from 'react'
import { useEffect } from 'react';
import instance from '../../../api/agent'
import { useDispatch, useSelector } from 'react-redux';
import { getPositionsForDropDown, getUsersForDropDown } from './DocTypeSlice';

export default function AddDocType() {

    var dispatch = useDispatch();
    const [positions, setPositions] = useState([])



    useEffect(() => {
        const getpositionList = async (e) => {
            try {
                const res = await instance.get('Positions/GetPositionsForCombo?depId=0')
                const { data, exception } = res?.data
                !exception && dispatch(getPositionsForDropDown(data))
            } catch (error) {
                console.log(error)
            }


        };

        const getworkerList = async (e) => {
            try {
                const res = await instance.get('Workers/GetWorkersForCombo')
                const { data, exception } = res?.data
                !exception && dispatch(getUsersForDropDown(data))
            } catch (error) {
                console.log(error)
            }
        };

        setTimeout(async () => {
            await getworkerList();
            await getpositionList();
        }, 1000);


    }, [dispatch])

    const workerList = useSelector((state) => state.doctype.workerList);
    const positionList = useSelector((state) => state.doctype.positionList);

    useEffect(() => {
        console.log(positions)
    }, [positions])

    const [selectedPosition, setSelectedPosition] = useState()
    const handleChange = (e) => {
        setSelectedPosition(e.target.value);
    }

    const onClickPositionButton = () => {

        if (!positions.filter((j) => j.id === +selectedPosition).length) {
            setPositions([...positions, ...positionList.filter(c => c.id === +selectedPosition)])
        }

    }

    const clickPositionDel = (e) => {
        // setPositions(positions.filter(x => x.id !==+ e.id))
        console.log(e);
    }

    return (

        <>
            <div className="card mb-3">
                <div className="card-header">
                    <h5 className="mb-0">Yeni Sənəd Tipi</h5>
                </div>
                <div className="card-body bg-light">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="mb-3">

                                    <label htmlFor="name">Adı</label>

                                    <input className="form-control" id="name" type="text" placeholder="Adı" />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-form-textarea">Açıqlama</label>
                                    <textarea className="form-control" id="basic-form-textarea" rows="3" placeholder="Açıqlama"></textarea></div>

                            </form>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor="approval_jobs">Vəzifə seçin</label>
                                <div className="d-flex">
                                    <select className="form-control selectpicker mr-2" id="approval_jobs" onChange={handleChange}>
                                        <option>Vəzifələr...</option>
                                        {
                                            positionList.map((position) => {
                                                return (<option key={position.id} value={position.id} >{position.positionName}</option>)

                                            }
                                            )}
                                    </select>
                                    <button className="btn btn-outline-primary" onClick={onClickPositionButton} style={{ minWidth: '100px' }} type="button">Əlavə Et</button>
                                </div>
                            </div>

                            <div className='card overflow-hidden'>
                                <div className="table-responsive scrollbar">
                                    <table className="table table-striped overflow-hidden">
                                        <thead>
                                            <tr className="btn-reveal-trigger">
                                                <th scope="col">Id</th>
                                                <th scope="col">Vəzifə Adı</th>
                                                <th className="text-end" scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {!!positions.length && positions.map((e) =>
                                                <tr className="btn-reveal-trigger" key={e.id}>
                                                    <td>{e.id}</td>
                                                    <td>{e.positionName}</td>
                                                    <td className="text-end">
                                                        <div><button class="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Sil" value={e.id} onClick={clickPositionDel}><span class="text-500 fas fa-trash-alt"></span></button></div>
                                                    </td>
                                                </tr>)}



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="form-group">
                                <label htmlFor="viewers_">İzləyiciləri seçin</label>
                                <div className="d-flex">
                                    <select className="form-control selectpicker mr-2" id="viewers_">
                                        <option>İşçilər...</option>
                                        {
                                            workerList.map((worker) =>
                                                <option key={worker.id}>{worker.fullName}</option>
                                            )}
                                    </select>
                                    <button className="btn btn-outline-primary" style={{ minWidth: '100px' }} type="button">Əlavə Et</button>
                                </div>
                            </div>
                            <div className='card overflow-hidden'>
                                <div className="table-responsive scrollbar">
                                    <table className="table table-striped overflow-hidden">
                                        <thead>
                                            <tr className="btn-reveal-trigger">
                                                <th scope="col">Id</th>
                                                <th scope="col">Adı</th>
                                                <th className="text-end" scope="col">#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="btn-reveal-trigger">
                                                <td>Ricky Antony</td>
                                                <td>ricky@example.com</td>
                                                <td className="text-end">
                                                    {/* <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs-10"></span></button>
                                                        <div className="dropdown-menu dropdown-menu-end border py-0">
                                                            <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                        </div>
                                                    </div> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                        <div className='col-12'>
                            <br />
                            <button className="btn btn-primary mb-3" type="submit">Yadda Saxla</button>
                        </div>



                    </div>
                </div>


            </div>


        </>


    )
}
