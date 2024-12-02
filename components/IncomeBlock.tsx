import React from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@/constants/Colors';
import { IncomeType } from '@/types';
import { DollarIcon } from '@/constants/Icons';
import { Feather } from '@expo/vector-icons';

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        {/* Header Row */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderColor: '#666',
              borderWidth: 1,
              borderRadius: 50,
              padding: 5,
              alignSelf: 'flex-start',
            }}
          >
            <DollarIcon width={22} height={22} color={Colors.white} />
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
        {/* Item Name */}
        <Text style={{ color: Colors.white }}>{item.name}</Text>
        <Text style={{ color: Colors.white }}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        IncomeBlock
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // Assuming `id` is unique in `IncomeType`
      />
    </View>
  );
};

export default IncomeBlock;
