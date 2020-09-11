import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import ProductComponent from './ProductComponent';

export default class BaiTapThuKinh extends Component {
    mangSanPham = [

        { id: 1, price: 30, name: 'GUCCI G8850U', hinhAnh: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', hinhAnh: './img/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', hinhAnh: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', hinhAnh:  './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', hinhAnh: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', hinhAnh: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', hinhAnh: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', hinhAnh: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', hinhAnh: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
    ];
    state = {
        matKinh: {
            id: 1, price: 30, name: 'GUCCI G8850U', hinhAnh: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '
        }
    }
    doiMatKinh =(imgGlasses)=>{
        this.setState({
            matKinh: imgGlasses
        })
    }
    render() {
        return (
            <div style={{ backgroundImage: 'url("./img/glassesImage/background.jpg")', backgroundSize: '100%', width: '100%', backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.2)', height: 850 }}>
                    <div style={{ width: '100%', backgroundColor: 'rgba(0,0,0,.5)', height: 100 }}>
                        <h2 style={{ color: 'white', paddingTop: 25, margin: 0 }}>TRY GLASSES APP ONLINE</h2>
                    </div>
                    <ProductComponent matKinh={this.state.matKinh} />
                    <DanhSachSanPham mangSanPham = {this.mangSanPham} doiMatKinh = {this.doiMatKinh} />
                </div>
            </div>
        )
    }
}
