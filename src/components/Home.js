import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Header from './Header';
import Content from './Content';

import styles from './css/home_style';
export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <ScrollView style={styles.content}>
          <Content />
        </ScrollView>
      </View>
    );
  }
}

