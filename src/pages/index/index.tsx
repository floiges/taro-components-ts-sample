import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common';
import viewPng from '../../asset/component/view.png'
import contentPng from '../../asset/component/content.png'
import formPng from '../../asset/component/form.png'
import navPng from '../../asset/component/nav.png'
import mediaPng from '../../asset/component/media.png'
import mapPng from '../../asset/component/map.png'
import canvasPng from '../../asset/component/canvas.png'

const PNGS = {
  viewPng,
  contentPng,
  formPng,
  navPng,
  mediaPng,
  mapPng,
  canvasPng
}
import './index.scss'

interface IPageInfo {
  url: string;
  page: string;
}
interface IListItem {
  id: string;
  name: string;
  open: boolean;
  hdClass?: string;
  bdClass?: string;
  boxClass?: string;
  imgSrc: string;
  _pages?: Array<IPageInfo>;
  pages: Array<string>;
}
interface IState {
  list: Array<IListItem>;
}

export default class Index extends Component<{}, IState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'Examples'
  }

  constructor() {
    super(...arguments)
    this.state = {
      list: [
        {
          id: 'view',
          name: '视图容器',
          open: false,
          imgSrc: '',
          pages: ['view']
        },
        {
          id: 'content',
          name: '基础内容',
          open: false,
          imgSrc: '',
          pages: []
        },
        {
          id: 'form',
          name: '表单组件',
          open: false,
          imgSrc: '',
          pages: []
        },
        {
          id: 'nav',
          name: '导航',
          open: false,
          imgSrc: '',
          pages: ['navigator']
        },
        {
          id: 'media',
          name: '媒体组件',
          open: false,
          imgSrc: '',
          pages: ['audio']
        },
        {
          id: 'map',
          name: '地图',
          open: false,
          imgSrc: '',
          pages: []
        },
        {
          id: 'canvas',
          name: '画布',
          open: false,
          imgSrc: '',
          pages: []
        }
      ]
    }
  }

  kindToggle = (e: ITouchEvent) => {
    const id = e.currentTarget.id
    const list = this.state.list
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setState({
      list: list
    })
  }

  goToComponent = (page: IPageInfo) => {
    Taro.navigateTo({
      url: page.url
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='index-hd'>
          <View className='index-desc'>
            <Text className='index-desc_text'>taro-components-ts-sample</Text>
          </View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {this.state.list
              .map((item) => {
                item.hdClass =
                  'kind-list-item-hd ' +
                  (item.open ? 'kind-list-item-hd-show' : '')
                item.bdClass =
                  'kind-list-item-bd ' +
                  (item.open ? 'kind-list-item-bd-show' : '')
                item.boxClass =
                  'navigator-box ' + (item.open ? 'navigator-box-show' : '')
                item.imgSrc = PNGS[`${item.id}Png`]
                item._pages = item.pages.map(page => {
                  return {
                    page: page,
                    url: `/pages/${page}/${page}`
                  }
                })
                return item
              })
              .map((item, index) => {
                return (
                  <View className='kind-list-item' key={index}>
                    <View
                      id={item.id}
                      className={item.hdClass}
                      onClick={this.kindToggle}>
                      <View className='kind-list-text'>
                        <Text>{item.name}</Text>
                      </View>
                      <Image className='kind-list-img' src={item.imgSrc} />
                    </View>
                    <View className={item.bdClass}>
                      <View className={item.boxClass}>
                        {item._pages && item._pages.map((page, index) => {
                          return (
                            <View
                              onClick={this.goToComponent.bind(this, page)}
                              key={index}
                              className='navigator'
                            >
                              <Text className='navigator-text'>{page.page}</Text>
                              <View className='navigator-arrow' />
                            </View>
                          )
                        })}
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}
