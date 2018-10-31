import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './css/header_style';

export default class Header extends Component{
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Image source={require('../images/ic_list_view.png')} style={styles.icon} resizeMode="cover"/>
            </TouchableOpacity>
            <View style={styles.searchBox}>
                <TouchableOpacity style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Image source={require('../images/ic_search_grey_24dp.png')} style={styles.searchBoxIcon} resizeMode="cover"/>
                </TouchableOpacity>
                <View style={{flex: 4, justifyContent: "center"}}>
                    <TextInput placeholder = "Sản phẩm, thương hiệu..."/>
                </View>
                <TouchableOpacity style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Image source={require('../images/ic_scan.png')} style={styles.searchBoxIcon} resizeMode="cover"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Image source={require('../images/ic_cart.png')} style={styles.icon} resizeMode="cover"/>
                <Text style={styles.countProducts}>0</Text>
            </TouchableOpacity>
        </View>
    );
  }
}