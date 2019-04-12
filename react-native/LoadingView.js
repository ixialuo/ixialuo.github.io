import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NativeModules } from 'react-native';
export default class LoadingView extends Component {
  render() {
    const {
      show = true,
      text = 'LOADING',
      onBack= () => {
        NativeModules.RNRouter.goBackNative()
      }
    } = this.props;
    return (
      <View style={show ? styles.modelMianView : styles.hiddenModelMainView}>
        <View style={styles.modelView}>
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#5d83ff" />
            <Text style={styles.textLoading}>{text}</Text>
          </View>
        </View>
      </View>
    )
  }

}
var styles = StyleSheet.create({
  modelView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modelMianView:{
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0)',
    flex:1,
    left:0,
    right:0,
    top:0,
    bottom:0,
  },
  hiddenModelMainView: {
    display: 'none'
  },
  loadingView: {
    width: 95,
    height: 95,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 7,
    justifyContent: 'center'
  },
  textLoading: {
    color: 'white',
    marginTop: 9,
    fontSize: 13,
    textAlign: 'center'
  }
})
