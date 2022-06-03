import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCate } from '../../redux/apiRequest'
// import './content.scss'
function Content() {
    const cate = useSelector(state => state.cate.cates?.allCate)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllCate(dispatch)
    },[])
    // console.log(cate)
    return (
        <div className="content">
            <div className="content-top">
                <div className="content-list">
                    {cate?.map(item => (
                        <div className="content-item" key={item._id}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <form className="content-option">
                    <select name="sort" id="sort">
                        <option value="all">All</option>
                        {cate?.map(item => (
                            <option value={item.name} key={item._id}>{item.name}</option>
                        ))}

                    </select>
                </form>
            </div>
        </div>
    )
}

export default Content