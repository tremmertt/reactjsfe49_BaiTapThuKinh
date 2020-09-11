import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import SanPhamKinh from './SanPhamKinh'

export default class ProductComponent extends Component {
    render() {
        let matKinh = this.props.matKinh 
        return (
            <div className="container">
                <div style={{ paddingTop: 50, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ background: 'url("./img/glassesImage/model.jpg")', width: 300, height: 350, backgroundSize: 'cover', position: 'relative' }}>
                        <img style={{ width: 140, position: 'absolute', top: 95, left: 82 }} src={matKinh.hinhAnh} className="card-img-top" />
                        <div className="card-body" style={{ textAlign: "left", background: 'rgba(255,152,0,.5)', position: 'absolute', bottom: 0 }}>
                            <h5 className="card-title" style={{ margin: 0, fontSize: 20, color: 'blue' }}>Card title</h5>
                            <p className="card-text" style={{ marginTop: 10, color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div>
                        <img src="./img/glassesImage/model.jpg" style={{width: 300, height: 350,marginLeft:50}}/>
                    </div>
                </div>
            </div>
        )
    }
}
