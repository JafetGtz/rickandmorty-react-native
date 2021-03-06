import React, {  useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import {  HandleGetCharapters } from './../fetch/FecthCharacters';
import {  connect } from 'react-redux'

 function Home (props) {
   const [Characters, setCharacters] = useState([]);
   const { navigation } = props;


   useEffect(() => {
       HandleGetCharapters().then( response => {
        setCharacters(response);
       })
   },[] )


   const handleNavigation = (data) => {
    navigation.navigate('Details', { data });
   }


    return(
        <View style={ styles.container }>
        <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={Characters}
        horizontal={false}
        numColumns={2}
        keyExtractor= {(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        renderItem={(data) => {
          console.log(data.image)
          return (
            <TouchableOpacity style={styles.card}>
             <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.title}>{data.item.name}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={ ()=> handleNavigation(data.item)}>
              <Image style={styles.cardImage} source={{uri:data.item.image}}/>
              </TouchableOpacity> 
            </TouchableOpacity>
          )
        }}/>
        </View>
    )
}




export default  connect()(Home);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFE29D"
      },
      list: {
        paddingHorizontal: 5,
        backgroundColor:"#FFE29D",
      },
      listContainer:{
        alignItems:'center'
      },
      separator: {
        marginTop: 10,
      },
      /******** card **************/
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor:"#FFF8E7",
        flexBasis: '47%',
        marginHorizontal: 5,
        borderRadius: 10
      },
      cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
      },
      cardFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      },
      cardImage:{
        flex: 1,
        height: 150,
        width: null,
        resizeMode: 'contain'
      },
      /******** card components **************/
      title:{
        fontSize:18,
        flex:1,
      },
      price:{
        fontSize:16,
        color: "green",
        marginTop: 5
      },
      buyNow:{
        color: "purple",
      },
      icon: {
        width:25,
        height:25,
      },
      /******** social bar ******************/
      socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
      },
      socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
      },
      socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
      },
      socialBarButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
})