import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Header from '../../components/head/head'
import './view.scss'

export default class PageView extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'View'
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='View'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>flex-direction: row</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__list'>
                <View className='example-body__list-item demo-text-1'></View>
                <View className='example-body__list-item demo-text-2'></View>
                <View className='example-body__list-item demo-text-3'></View>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>flex-direction: column</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__list example-body__list--vertical'>
                <View className='example-body__list-item demo-text-1'></View>
                <View className='example-body__list-item demo-text-2'></View>
                <View className='example-body__list-item demo-text-3'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}