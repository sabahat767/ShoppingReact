import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
class Total extends React.Component{
render(){
    return(
        <div>
            <div className='border w-25 ml-2'>
                <h6 className='text-muted'>items:{this.props.count}</h6>
                <h6 className='text-muted'>total:{this.props.total}</h6>

            </div>
        </div>
    )
}
}
export default Total;
