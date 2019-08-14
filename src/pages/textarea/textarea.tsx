import { Component, Config } from '@tarojs/taro'
import { View, Text, Textarea, Button } from '@tarojs/components'
import Header from '../../components/head/head'
import './textarea.scss'
import { CommonEvent } from '@tarojs/components/types/common';

interface IState {
  value: string
}

export default class PageView extends Component<{}, IState> {
  config: Config = {
    navigationBarTitleText: 'Textarea'
  }

  state = {
    value: '初始值'
  }

  handleClick = () => {
    this.setState({
      value: 'click button'
    })
  }

  blur = () => {
    console.log('blur')
  }

  focus = () => {
    console.log('focus')
  }

  input = (e: CommonEvent) => {
    console.log(e)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Textarea'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>输入区域高度自适应，不会出现滚动条</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__button'>
                <Button size='mini' type='primary' onClick={this.handleClick}>点击设置值到第一个Textarea</Button>
              </View>
              <Textarea onFocus={this.focus} onBlur={this.blur} onInput={this.input} value={this.state.value} placeholder='这是一个 Textarea' autoHeight></Textarea>
            </View>
          </View>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>这是一个可以自动聚焦的 textarea</Text>
            </View>
            <View className='example-body'>
              <Textarea autoFocus placeholder='这是一个 Textarea' value={this.state.value}></Textarea>
            </View>
          </View>
        </View>
      </View>
    )
  }
}