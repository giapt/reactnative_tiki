import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './css/content_style';

const categoryList = [
    { src: require('../images/phone.png'), name: 'Điện Thoại - Máy Tính Bảng' },
    { src: require('../images/camera.jpeg'), name: 'Máy Ảnh - Máy Quay Phim' },
    { src: require('../images/laptop.png'), name: 'Laptop - Máy Vi Tính' },
    { src: require('../images/dodien.jpeg'), name: 'Điện Gia Dụng' },
    { src: require('../images/book.jpeg'), name: 'Nhà Sách Tiki' },
    { src: require('../images/toy.jpeg'), name: 'Đồ chơi - Mẹ & Bé' },
    { src: require('../images/milk.jpg'), name: 'Bách Hóa Online' },
    { src: require('../images/mypham.jpg'), name: 'Sức Khỏe - Làm Đẹp' },
    { src: require('../images/fashion.png'), name: 'Thời Trang' },
    { src: require('../images/tv.png'), name: 'Tivi & Thiết Bị Nghe Nhìn' },
    { src: require('../images/vehicle.jpg'), name: 'Ô Tô - Xe Máy - Xe Đạp' },
    { src: require('../images/service.jpg'), name: 'Voucher - Dịch Vụ' },
    { src: require('../images/noicom.jpeg'), name: 'Nhà Cưả - Đời Sống' },
    { src: require('../images/sport.jpeg'), name: 'Thể Thao - Dã Ngoại' },
    { src: require('../images/other.jpeg'), name: 'Thiết Bị Số - Phụ Kiện Số' }
];

const serviceList = [
    { src: require('../images/ic_phonecard.png'), name: 'Phiếu quà tặng' },
    { src: require('../images/ic_phonecard.png'), name: 'Đặt phòng Booking' },
    { src: require('../images/ic_phonecard.png'), name: 'Máy bay' },
    { src: require('../images/ic_phonecard.png'), name: 'Mua bảo hiểm online' },
    { src: require('../images/ic_phonecard.png'), name: 'Mua thẻ điện thoại' },
    { src: require('../images/ic_gamecard.png'), name: 'Thẻ game' },
    { src: require('../images/ic_datacard.png'), name: 'Thẻ 3G/4G' },
    { src: require('../images/ic_topup.png'), name: 'Nạp tiền điện thoại' },
    { src: require('../images/ic_phonecard.png'), name: 'Mua hàng nước ngoài' },    
]

export default class Content extends Component{
    renderCategory() {
        let categoryConponent = [];
        categoryList.map((val, key) => {
            categoryConponent.push(
                <TouchableOpacity style={styles.categoryItem}>
                    <Image source={val['src']} style={styles.categoryImg}/>
                    <Text style={{textAlign: "center"}}>{val['name']}</Text>
                </TouchableOpacity>
            )
        })
        return categoryConponent;
    }

    renderService() {
        let ServiceConponent = [];
        serviceList.map((val, key) => {
            ServiceConponent.push(
                <TouchableOpacity style={styles.serviceItem}>
                    <Image source={val['src']} style={styles.serviceImg}/>
                    <Text style={{textAlign: "center", color: "#FFF"}}>{val['name']}</Text>
                </TouchableOpacity>
            )
        })
        return ServiceConponent;
    }

    renderItem(){
        let itemConponent = [];
        itemList.map((val, key) => {
            itemConponent.push(
                <TouchableOpacity style={styles.dealItem}>
                    <Image source={val['src']} style={{height: 120, width: 120}}/>
                    <Text>{val['name']}</Text>
                    <View style={{flexDirection: "column"}}>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{color: "red", fontSize: 16}}>{val['price']} </Text>
                            <Text style={{color: "red", fontSize: 16, textDecorationLine: "underline"}}>đ</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontSize: 12, marginRight: 5, textDecorationLine: "line-through", color: "#999"}}>86.000 đ</Text>
                            <Text style={{backgroundColor: "red", padding: 2, color: "#FFF", fontSize: 12, borderRadius: 2}}>-{val['sale']}</Text>
                        </View>
                        <Image source={require('../images/ic_shipping_2h.png')} style={{height: 16, width: 16, position: "absolute", top: 0, right: 0}}/>
                    </View>
                </TouchableOpacity>
            )
        })
        return itemConponent;
    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.slide}>
                <Image source={require('../images/slide1.jpg')} style={styles.slideImg} resizeMode="contain"/>
            </View>
            <Image source={require('../images/quay_tiki.jpg')} style={styles.bannerImg} resizeMode="contain"/>
            <View style={styles.simpleBoxContainer}>
                <View style={styles.simpleBoxHeading}>
                    <Text style={{fontSize: 16}}>Danh sách ngành hàng</Text>
                    <TouchableOpacity style={styles.viewAllButton}>
                        <Text style={{textAlign: "center", lineHeight: 30, color: "#FFF"}}>XEM TẤT CẢ</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.simpleBoxBody}>
                        {this.renderCategory()}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.simpleBoxContainerService}>
                <View style={styles.simpleBoxHeadingService}>
                    <Text style={{fontSize: 16, color: "#FFF"}}>Dịch Vụ Tiện Ích</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection: "row"}}>
                        {this.renderService()}
                    </View>
                </ScrollView>       
            </View>
            
        </View>
    );
  }
}