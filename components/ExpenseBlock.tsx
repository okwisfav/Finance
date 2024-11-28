import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExpenseType } from "@/types";


const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  return (
    <View>
      <Text>ExpenseBlock</Text>
    </View>
  )
}

export default ExpenseBlock

const styles = StyleSheet.create({})