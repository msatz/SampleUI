/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Image,} from 'react-native';
import { Container, Content, Header, Form, Input, Item,  Label, Icon, List, ListItem, Body, Left,Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';
//import { Input } from 'react-native-elements';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var options = {
title: 'Select Image',
storageOptions: {
skipBackup: true,
path: 'images'
}
};

type Props = {};
export default class App extends Component<Props> {
    constructor() {
        super();
        this.textMaxLength = 140;
        
        this.state={
        textLength: 0,
        image_url:null,
        };
    }
    
    onChangeText(text){
        this.setState({
            textLength: this.textMaxLength - text.length
        });
    }
    webValue(text){
        
    }
    validate = (text) => {
        console.log(text);
        var urlregex = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
        if (urlregex.test(text)) {
             console.log("Website link is Correct");
            return (true);
            
        }
        else{
        console.log("Website link is Not Correct");
        return (false);
        }
          }
    
    pickImage(){
        
        ImagePicker.showImagePicker(options, (response) => {
                                    console.log('Response = ', response);
                                    
                                    if (response.didCancel) {
                                    console.log('User cancelled image picker');
                                    }
                                    else if (response.error) {
                                    console.log('ImagePicker Error: ', response.error);
                                    }
                                    else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                    }
                                    else {
                                    const source = { uri: response.uri };
                                    //let image = { uri: 'data:image/jpeg;base64,' + response.data };
                                    this.setState({
                                                  image_url: source,
                                                  });
                                    }
                                    });
        
    }
  render() {
    return (
   <Container>
    <Content>
       <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.Hdirection}>
                <Text style={styles.HeaderView}>Edit Profile</Text>
                <Text style={styles.HeaderView}>X</Text>
            </View>
           <Item stackedLabel>
            <View style={styles.containerCenter}>
            {this.state.image_url === null ? (
                    <Image style={{width: 60, height: 60}} source={require("./Assets/user.png")} />
                    ) : (
                         <Image style={{width: 60, height: 60, marginBottom: 10,}} source={this.state.image_url} />
                )}
            
            <Button  style={styles.SButton}  onPress={() => this.pickImage()}
            ><Text style={{  fontSize: 12, color:'#000'  }} >Edit Userpic</Text></Button>
          </View>
          </Item>
            
            <Item stackedLabel>
            <View style={styles.Hdirection}>
            <Label style={styles.Tdirection}>YOUR BIO</Label>
            {this.state.textLength === 0 ? (
            <Label style={styles.TLabel}>140 Characters Left</Label>
            ) : (
                <Label style={styles.TLabel}>{this.state.textLength} Characters Left</Label>
            )}
            
           </View>
            
            <Input
            keyboardType="default"
            placeholder="Your Bio"
            maxLength={140}
            underlineColorAndroid='transparent'
            onChangeText= {this.onChangeText.bind(this)}/>
            </Item>
           
      
            
            <Item stackedLabel >
            <Label style={styles.TLabel}>WEBSITE</Label>
            <Input
            keyboardType="url"
            placeholder="Website Link"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.validate(text)}/>
            </Item>
            
            
            <Item stackedLabel >
            <Label style={styles.TLabel}>INSTAGRAM</Label>
            <Input
            keyboardType="default"
             placeholder="Your Insta Username"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
            </Item>
            
            
            <Item stackedLabel >
            <Label style={styles.TLabel}>TWITTER</Label>
            <Input
            keyboardType="twitter"
             placeholder="Your Twitter Username"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
            </Item>
            
            
            <Item stackedLabel >
            <Label style={styles.TLabel}>FACEBOOK</Label>
            <Input
            keyboardType="default"
             placeholder="Your Facebook Username"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
            </Item>
            
            
            <Item stackedLabel >
            <Label style={styles.TLabel}>YOUTUBE</Label>
            <Input
            keyboardType="default"
             placeholder="Your YouTube Username"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({email})}/>
            </Item>
            
            
       </ScrollView>
    </Content>
</Container>
    );
  }
}

const styles = StyleSheet.create({
                                 container: {
                                 flexDirection: 'column', flex: 1,
                                 justifyContent:'space-between',
                                 },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 Hdirection: {
     flexDirection: 'row', flex: 1,
     justifyContent:'space-between',
 //alignItems:'flex-end',
 },
                                 Tdirection:{
                                 flexDirection: 'row', flex: 1, alignItems: 'flex-start',
                                 fontSize: 10,
                                 fontWeight: 'bold',
                                 color: 'gray',
                                 marginLeft: 5,
                                 },
                                 TLabel:{
                                 fontSize: 10,
                                 fontWeight: 'bold',
                                 color: 'gray',
                                 marginLeft: 5,
                                 },
                                 SButton:{ backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1,borderRadius: 20,paddingLeft:20,paddingRight:20,marginBottom:10,
                                 alignItems: 'center',},
  HeaderView: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
     contentContainer: {
     paddingVertical: 20
     }
});
