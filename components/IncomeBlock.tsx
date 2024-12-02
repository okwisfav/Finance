import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { IncomeType } from '@/types'
import { DollarIcon } from '@/constants/Icons'

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
   const renderItem:ListRenderItem<IncomeType> = ({item}) => {
     return(
       <View style={{
        backgroundColor: Colors.grey,
        padding: 20,
        borderRadius: 20,
        marginRight: 15, 
        width: 150, 
        gap:10
        }}
        >
           <View>
               <DollarIcon width={22} height={22} color={Colors.white} />
           </View>
           <Text style={{color:Colors.white}}>{item.name}</Text>
       </View>
     );
   } 
  return (
    <View>
      <Text style={{color:Colors.white,fontSize: 16, marginBottom: 20}}>IncomeBlock</Text>
      <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default IncomeBlock

const styles = StyleSheet.create({})