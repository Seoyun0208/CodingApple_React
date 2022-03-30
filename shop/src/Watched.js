import React from 'react';
import 'react-bootstrap';
import './Watched.scss';
import {useHistory} from 'react-router-dom';

function Watched (props) {

    let watchedAll = JSON.parse(localStorage.getItem('watched'));
    let findWatched = [];
    if (watchedAll !== null){
        for(let i = 0; i < watchedAll.length; i++) {
            findWatched.push(props.shoesAll.find(function(item) {
                return item.id === parseInt(watchedAll[i]);
            }));
        }
    }

    // console.log(findWatched);

    let history = useHistory();

    return (
        <div className='watched'>
            <p className='item'>최근 본 상품</p>
            {
                findWatched.map((watched, idx)=>{
                    return (
                        <div className="watched-item" key={idx} onClick={()=>{ history.push(`/detail/${watched.id}`) }}>
                            <img src={`https://codingapple1.github.io/shop/shoes${watched.id + 1}.jpg`} alt="item" />
                            <p className='name'>{watched.title}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Watched;