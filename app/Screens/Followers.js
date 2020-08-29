import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {  ListItem,  } from 'react-native-elements';

import {  connect } from 'react-redux'



function Followers(props){
   const [Followers, setFollowers] = useState([]);



    useEffect(() => {
        console.log(props.cart);
    }, [props])


    
    return(
        <View>
        <ScrollView>
          {
              props.cart.map( (item, i) => {
                return(
                    
                    <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                 )
              } )

          }
          </ScrollView>

        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Followers);