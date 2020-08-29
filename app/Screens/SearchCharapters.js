import React,{ useState, useEffect }from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { SearchBar, ListItem, Avatar } from 'react-native-elements';
import {  handleSearch } from './../fetch/FecthCharacters';
import Icon from 'react-native-vector-icons/Ionicons';






export default function Search(){
    const [  search, setSearch ] = useState('');
    const [response, setResponse] = useState([]);
    const [error, seterror] = useState(true)

    const  UpdateSearch = (board) => {
        setSearch(board);
        handleSearch(board).then( data => {
            if (data === false) {
                seterror(true)
            }else{
              setResponse(data);
              seterror(false);
            }
           
        })
    }

    useEffect(() => {
        
    }, [search])


  return(
      <View>
      <SearchBar
      round
      placeholder="Busca tu personaje.."
      onChangeText={ UpdateSearch}
      value={search}
      containerStyle={ { backgroundColor: "#3F3356", borderWidth: 0, } }
      
      
    />
        {
            error ? (
                <Text>...</Text>
            ) : (
                <ListCharacters data={response}/>
            )
        }
       

     </View>
  )
}


const ListCharacters = (data) => {
   console.log(data);
   return (
    
        data.data.map((item, i) => {
            return(
               <ScrollView>
               <ListItem key={i} bottomDivider>
               <Avatar source={{uri: item.image}} />
               <ListItem.Content>
               <ListItem.Title>{item.name}</ListItem.Title>
               </ListItem.Content>
             </ListItem>
             </ScrollView>
            )
       })
    
   )
}


