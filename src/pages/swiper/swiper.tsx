import { Component, Config } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Switch,
  Slider
} from '@tarojs/components'
import Header from '../../components/head/head'
import { CommonEvent } from '@tarojs/components/types/common';
import './swiper.scss'

interface IState {
  current: number;
  duration: number;
  interval: number;
  isCircular: boolean;
  verticalIsCircular: boolean;
  isAutoplay: boolean;
  verticalIsAutoplay: boolean;
  hasIndicatorDots: boolean;
  verticalHasIndicatorDots: boolean;
}

export default class PageView extends Component<{}, IState> {
  config: Config = {
    navigationBarTitleText: 'Swiper'
  }

  state = {
    current: 1,
    duration: 500,
    interval: 5000,
    isCircular: false,
    verticalIsCircular: false,
    isAutoplay: false,
    verticalIsAutoplay: false,
    hasIndicatorDots: true,
    verticalHasIndicatorDots: true,
  }

  setAutoPlay = (e: CommonEvent) => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  setVerticalAutoPlay = (e: CommonEvent) => {
    this.setState({
      verticalIsAutoplay: e.detail.value
    })
  }

  setCircular = (e: CommonEvent) => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  setVerticalCircular = (e: CommonEvent) => {
    this.setState({
      verticalIsCircular: e.detail.value
    })
  }

  setIndicatorDots = (e: CommonEvent) => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  setVerticalIndicatorDots = (e: CommonEvent) => {
    this.setState({
      verticalHasIndicatorDots: e.detail.value
    })
  }

  setInterval = (e: CommonEvent) => {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = (e: CommonEvent) => {
    this.setState({
      duration: e.detail.value
    })
  }

  render() {
    const {
      current,
      isAutoplay,
      duration,
      isCircular,
      interval,
      hasIndicatorDots,
      verticalIsCircular,
      verticalHasIndicatorDots,
      verticalIsAutoplay
    } = this.state
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Swiper'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>横向滑动</Text>
            </View>
            <View className='example-body'>
              <Swiper
                indicatorColor='#999'
                indicatorActiveColor='#333'
                current={current}
                duration={duration}
                interval={interval}
                circular={isCircular}
                autoplay={isAutoplay}
                indicatorDots={hasIndicatorDots}>
                <SwiperItem>
                  <View className="demo-text-1"></View>
                </SwiperItem>
                <SwiperItem>
                  <View className="demo-text-2"></View>
                </SwiperItem>
                <SwiperItem>
                  <View className="demo-text-3"></View>
                </SwiperItem>
              </Swiper>
              <View className='switch-list'>
                <View className="switch-list__item">
                  <View className="switch-list__text">指示点</View>
                  <Switch checked={hasIndicatorDots} onChange={this.setIndicatorDots}></Switch>
                </View>
                <View className="switch-list__item">
                  <View className="switch-list__text">自动播放</View>
                  <Switch checked={isAutoplay} onChange={this.setAutoPlay}></Switch>
                </View>
                <View className="switch-list__item">
                  <View className="switch-list__text">循环播放</View>
                  <Switch checked={isCircular} onChange={this.setCircular}></Switch>
                </View>
              </View>
              <View className="slider-list">
                <View className="slider-list__item">
                  <View className="slider-list__item-header">
                    <Text>幻灯片切换时长(ms)</Text>
                  </View>
                  <View className="slider-list__item-body">
                    <Slider
                      showValue
                      step={1}
                      min={500}
                      max={2000}
                      value={duration}
                      onChange={this.setDuration}></Slider>
                  </View>
                </View>
                <View className="slider-list__item">
                  <View className="slider-list__item-header">
                    <Text>自动播放间隔时长(ms)</Text>
                  </View>
                  <View className="slider-list__item-body">
                    <Slider
                      showValue
                      step={1}
                      min={2000}
                      max={10000}
                      value={interval}
                      onChange={this.setInterval}></Slider>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>Swiper 纵向滑动</Text>
            </View>
            <View className='example-body'>
              <Swiper
                indicatorColor='#999'
                indicatorActiveColor='#333'
                vertical
                circular={verticalIsCircular}
                indicatorDots={verticalHasIndicatorDots}
                autoplay={verticalIsAutoplay}
                previousMargin='20'>
                <SwiperItem>
                  <View className='demo-text-1'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-2'></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='demo-text-3'></View>
                </SwiperItem>
              </Swiper>
            </View>
            <View className='switch-list'>
              <View className='switch-list__item'>
                <View className='switch-list__text'>指示点</View>
                <Switch checked={verticalHasIndicatorDots} onChange={this.setVerticalIndicatorDots} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>自动播放</View>
                <Switch checked={verticalIsAutoplay} onChange={this.setVerticalAutoPlay} ></Switch>
              </View>
              <View className='switch-list__item'>
                <View className='switch-list__text'>循环播放</View>
                <Switch checked={verticalIsCircular} onChange={this.setVerticalCircular} ></Switch>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}