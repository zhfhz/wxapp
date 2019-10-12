import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from '@tarojs/redux'
import Display from '../../components/Display'

import './index.scss'


@connect(({ counter }) => ({
  counter,
}), dispatch => ({
  add: () => dispatch({ type: 'counter/add' }),
  minus: () => dispatch({ type: 'counter/minus' }),
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    const { asyncLoading, num } = this.props.counter
    return (
      <View className='index'>
        <AtButton className='btn' onClick={this.props.add}>+1</AtButton>
        <AtButton className='btn' onClick={this.props.minus}>-1</AtButton>
        <AtButton
          className='btn'
          type='primary'
          onClick={() => this.props.dispatch({ type: 'counter/asyncAdd' })}
          loading={asyncLoading}
        >async +10</AtButton>
        <Display text={num} />
      </View>
    )
  }
}

export default Index
