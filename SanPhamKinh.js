import React, { Component } from 'react'

export default class SanPhamKinh extends Component {
    render() {
        let {sanPham,doiMatKinh} = this.props;
        return (
            <div className="text-center" style={{border:'0.5px solid gray',cursor:'pointer'}}>   
                <img onClick={()=>{
                    this.props.doiMatKinh(sanPham)
                }} style={{width:150}} src={sanPham.hinhAnh}/>
            </div>
            
        )
    }
}
