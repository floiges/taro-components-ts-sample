import { Component, Config } from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'
import Header from '../../components/head/head'
import './scroll-view.scss'

export default class PageView extends Component {
  config: Config = {
    navigationBarTitleText: 'ScrollView'
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='ScrollView'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text> Horizontal </Text>
            </View>
            <View className='example-body'>
              <ScrollView scrollX className='example-body__scroll-view'>
                <View className='example-body__scroll-view-item demo-text-1'></View>
                <View className='example-body__scroll-view-item demo-text-2'></View>
                <View className='example-body__scroll-view-item demo-text-3'></View>
              </ScrollView>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text> Horizontal </Text>
            </View>
            <View className='example-body example-body--vertical'>
              <ScrollView scrollY scrollWithAnimation className='example-body__scroll-view'>
                <View className='example-body__scroll-view-item demo-text-1'></View>
                <View className='example-body__scroll-view-item demo-text-2'></View>
                <View className='example-body__scroll-view-item demo-text-3'></View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}