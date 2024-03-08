import React, { useEffect } from 'react'
import EditButton from './components/EditButton'
import instance from '../../../api/agent'
import { useDispatch, useSelector } from 'react-redux'
import { getDocTypeList } from './DocTypeSlice';

export default function DocType() {
    var dispatch = useDispatch();

    useEffect(() => {
        const getDocTypes = async (e) => {
            try {
                const res = await instance.get('DocTypes')
                const { data, exception } = res?.data
                console.log(data);
                !exception && dispatch(getDocTypeList(data))
            } catch (error) {
                console.log(error)
            }


        };
        setTimeout(async () => {
            await getDocTypes();
        }, 1000);

    }, [dispatch])

    const data = useSelector((state) => state.doctype.docTypeList)
    const showData = data.map((docelement) =>
        <tr>
            <td className="name">{docelement.name}</td>
            <td className="descr">{docelement.description}</td>
            <td className="id"><EditButton id={docelement.id} /></td>
        </tr>
    );
    return (
        <div className="card mb-3">

            <div className="card-header">
                <div class="row">
                    <div class="col">
                        <a class="btn btn-falcon-default btn-sm" href="/admin/esd/doctypes/add-doctype"><span class="fas fa-plus fs--2 mr-1"></span>Əlavə et</a>
                    </div>
                </div>
                <br/>
                <div id="tableExample2">
                    <div className="table-responsive scrollbar">
                        <table className="table table-bordered table-striped fs-10 mb-0">
                            <thead className="bg-200">
                                <tr>
                                    <th className="text-900 sort" data-sort="name">Sənəd Adı</th>
                                    <th className="text-900 sort" data-sort="email">Açıqlaması</th>
                                    <th className="text-900 sort" data-sort="age">#</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {showData}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
