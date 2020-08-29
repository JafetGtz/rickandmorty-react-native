import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from  'react-native';
import { Avatar, Overlay, Tooltip } from 'react-native-elements';
const W = Dimensions.get("window").width;
const H = Dimensions.get("window").height;
import {  connect } from 'react-redux'
import store from './../reducers/FollowerReducer';

function Details(props){
    const { data: { name, image, status, id} } = props.route.params;
    const [visible, setVisible] = useState(false);
    
    
    return(
        <View style={styles.container}>
           <View style={ styles.box }>
           <Avatar
           rounded
           size="xlarge"
           source={{
             uri:
               image,
           }}
         />
         <Text style={styles.Textname}>{name}</Text>
         <Text style={styles.specie}>Status: {status}</Text>
         <Text style={{ color:"#FFF", fontSize: (W/20), marginTop: 8 }}>⭐ 5.0 (235 Reviews)</Text>
           <TouchableOpacity style={styles.follow}  onPress={ ()=> handleAdd(name,id) }>
            <Text style={styles.textFl}>Follow me</Text>
           </TouchableOpacity>
           </View>
           
        </View>
    )
}



const handleAdd = (name, id) => {
  store.dispatch({
      type: "ADD_FOLLOW",
      value: {
        name,
        id
      }
  })
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    }
}

export default  connect(mapStateToProps)(Details);


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#00C48C"
    },
    box: {
        paddingTop: 50,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00C48C"
    },
    Textname: {
        paddingTop: 20,
        fontSize: 30,
        color: "#FFF"
    },
    specie: {
        paddingTop: 10,
        fontSize: 20,
        color: "#FFF"
    },
    follow: {
        marginTop: 20,
        width: "80%",
        alignItems: "center",
        backgroundColor: "#7DDFC3",
        justifyContent: "center",
        flexDirection: "row",
        height: 60,
        borderRadius: 20
        
    },
    textFl: {
        fontSize: 30,
        color: "#fff",
        
    }
})