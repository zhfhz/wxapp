import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'

export default function Display({ text }) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}
