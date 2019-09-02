import { Component, Config } from '@tarojs/taro'
import { Camera, Button, View } from '@tarojs/components'
import Header from '../../components/head/head'
import './camera.scss'

type DevicePosition = 'back' | 'front';
interface IState {
  devicePosition: DevicePosition;
}

export default class PageView extends Component<{}, IState> {
  config: Config = {
    navigationBarTitleText: 'Camera'
  }

  state: IState = {
    devicePosition: 'back',
  }

  handleError() {
    alert('您的浏览器不允许使用摄像头')
  }

  handleStop() {
    alert('摄像头被非正常终止')
  }

  toggleDevice = () => {
    this.setState({
      devicePosition: this.state.devicePosition == 'back' ? 'front' : 'back'
    })
  }

  render() {
    return (
      <View className='componetns-page'>
        <View className='components-page__header'>
          <Header title='Camera'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              <Button type='primary' onClick={this.toggleDevice}>开启{this.state.devicePosition =='back'?'前置':'后置'}镜头</Button>
              <Camera
                className='camera-content'
                onStop={this.handleStop}
                onError={this.handleError}
                devicePosition={this.state.devicePosition}></Camera>
            </View>
          </View>
        </View>
      </View>
    )
  }
}