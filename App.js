
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,
Button,} from 'react-native';
import { white } from 'ansi-colors';

export default class App extends Component {

  constructor(){
    super()
    this.state={
      resultText:"",
     // operations:"",
    //  ops:""
        //i:0,
       
    }
    operations = ['D','+','-','*','/']
  }
  calculationResult(){
   const text = this.state.resultText
  }
buttonPressed(text){
  console.log(text)

if(text == '='){
  return this.calculationResult()
}

  this.setState({
    resultText: this.state.resultText+text
  })
}

operate(operation){
  console.log(operation," operations")
  switch(operation){
    case 'D':
    let text = this.state.resultText.split('')
    text.pop()
    this.setState({
      resultText:text.join('')
    })
    break
    case '+':
    case '-':
    case '*':
    case '/':
    const lastChar = this.state.resultText.split('').pop()
    
    // console.log(lastChar+"last")
    if(operations.indexOf(lastChar) > 0 ) return
  
    if(this.state.resultText ==  "" ) return
    this.setState({
      resultText:  this.state.resultText + operation
    })

    
  }
}
  render() {

     // this.operations = ['D','+','-','*','/']
        let ops = []
  //       for( i=0; i< 5; i++){
  //       ops.push(
  //     <TouchableOpacity key={i} style={styles.btn} onPress={()=>this.operate(i)}>
  //       <Text style={[styles.btntext,styles.white]}>{operations[i]}</Text>
  //     </TouchableOpacity>
  //       )
   
  //  }
  operations.map((data, i)=>{
    ops.push(
         <TouchableOpacity key={i} style={styles.btn} onPress={()=>this.operate(data)}>
         <Text style={[styles.btntext,styles.white]}>{data}</Text>
       </TouchableOpacity> 
    )  
  })

    return (
      <View style={styles.container}>
        <View style={styles.result}>
             <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.buttons}>
            <View style={styles.numbers}>
                <View style={styles.row}>
                    <TouchableOpacity
                    onPress={() =>  this.buttonPressed(7)}
                    
                     style={styles.btn}>
                      <Text>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(8)}
                    style={styles.btn}>
                      <Text>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(9)}
                     style={styles.btn}>
                      <Text>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(4)}
                     style={styles.btn}>
                      <Text>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(5)}
                     style={styles.btn}>
                      <Text>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(6)}
                     style={styles.btn}>
                      <Text>6</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.row}>
                <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(1)}
                     style={styles.btn}>
                      <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(2)}
                     style={styles.btn}>
                      <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(3)}
                     style={styles.btn}>
                      <Text>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(0)}
                     style={styles.btn}>
                      <Text>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed(".")}
                     style={styles.btn}>
                      <Text>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() =>  this.buttonPressed('=')}
                     style={styles.btn}>
                      <Text>=</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
            <View style={styles.operations}>         
                    {ops}   
            </View>
        </View>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  btn:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center',
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  white:{
    fontSize:30,
    color:'white'
  },
  calculation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttons: {
    flexDirection:'row',
    // flexGrow:1,
    flex:7,
    backgroundColor: 'blue',
  },
  
  numbers: {
 flex:3,
    backgroundColor: 'yellow',
  },
  row: {
  flexDirection:'row',
  flex:1,
  justifyContent:'space-around',
  alignItems:'center'
  },
  
  
  operations: {
    flex:1,
    justifyContent:'space-around',
    backgroundColor: 'black',
  },
  resultText:{
 fontSize:30,
 color:'white',
  },
  
});
