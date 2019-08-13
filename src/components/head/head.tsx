import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

interface IProps {
  title: string,
  desc?: string,
}

export default class Header extends Component<IProps> {
  static options = {
    addGlobalClass: true
  }

  render() {
    return (
      <View className='page-head'>
        <View className='page-head-title'>{this.props.title}</View>
        <View className='page-head-line'></View>
        {!!this.props.desc ?
          (<View className='page-head-desc'>{this.props.desc}</View>)
          : null}
      </View>
    )
  }
}