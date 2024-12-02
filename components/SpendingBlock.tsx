import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { SpendingType } from '@/types'

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
      <Text style={{color:Colors.white,fontSize:16,fontWeight: "700" }}>july Spending</Text>
    </View>
  )
}

export default SpendingBlock