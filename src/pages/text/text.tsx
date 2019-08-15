import { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Header from '../../components/head/head'
import './text.scss'

export default class PageView extends Component {
  config: Config = {
    navigationBarTitleText: 'Text'
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Text'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>H5、小程序通用</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__text'>
                <Text selectable>可选择的文字</Text>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>仅小程序可以使用</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__text'>
                <Text>不支持多       空格文字</Text>
              </View>
              <View className='example-body__text'>
                <Text space='ensp'>多       空格文字(ensp)</Text>
              </View>
              <View className='example-body__text'>
                <Text space='nbsp'>多       空格文字(nbsp)</Text>
              </View>
              <View className='example-body__text'>
                <Text>不解码文字&gt;</Text>
              </View>
              <View className='example-body__text'>
                <Text decode>解码文字&gt;</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}