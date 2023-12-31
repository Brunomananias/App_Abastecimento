import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Modal } from 'react-native';
import   React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible:false,
      valorAlcool: '',
      valorGasolina: '',
      mensagem: ''
    };

    this.calcular = this.calcular.bind(this)
    this.sair = this.sair.bind(this)

  }

  calcular(){
    valor = this.state.valorAlcool / this.state.valorGasolina
    this.setState({modalVisible: true})
    if(valor < 0.7){
      this.setState({mensagem: 'Compensa usar Álcool'})
    }else{
      this.setState({mensagem: 'Compensa usar Gasolina'})
    }
  }

  sair(visible){
    this.setState({modalVisible:visible})
  }

  render(){
  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <Image
      source={require('./src/Imagens/logo.png')}
      style={styles.imagemLogo}
      />
      <Text style={styles.textoTitulo}>Qual melhor opção?</Text>
      </View>

      <View style={styles.inputAlcool}>
      <Text style={{color: 'white'}}>Álcool (Preço por litro)</Text>
      <TextInput
        style={styles.input}
        value={this.state.valorAlcool}
        onChangeText={(text)=> this.setState({valorAlcool: text})}
        placeholder='R$'
      />
      <Text style={{color: 'white'}}>Gasolina (Preço por litro)</Text>
      <TextInput
        style={styles.input}
        value={this.state.valorGasolina}
        onChangeText={(text)=> this.setState({valorGasolina: text})}
        placeholder='R$'
      />

      <TouchableOpacity style={styles.botaoCalcular} onPress={ this.calcular}>
        <Modal animationType='slide' visible={this.state.modalVisible}>
        <View style={styles.viewModal}>
          <Image
           source={require('./src/Imagens/gas.png')}
           style={styles.imagemCombustivel}
          />
          <Text style={styles.textoResposta}>{this.state.mensagem}</Text>

          <Text style={{color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Com os preços:</Text>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>Álcool: R$ {this.state.valorAlcool}</Text>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 10, marginBottom: 30}}>Gasolina: R$ {this.state.valorGasolina}</Text>
          
          <Button title='Calcular novamente' onPress={ () => this.sair(false)}/>
        </View> 
        </Modal>
      <Text style={{color: 'white'}}>Calcular</Text>
      </TouchableOpacity>
    
      </View>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginBottom: 40
  },
  textoTitulo:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 7,
  },
  botaoCalcular: {
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dd7b22', 
    width: 100, 
    textAlign: 'center', 
    marginTop: 10,
    borderRadius: 10
  },
  viewModal: {
    backgroundColor: 'black',
    flex: 1,
  },
  imagemCombustivel: {
  marginLeft: 100,
  marginBottom: 30,
  marginTop: 80    
  },
  textoResposta: {
    color: 'green', 
    fontSize:20, 
    fontWeight: 'bold', 
    textAlign: 'center'
  }
});


export default App;
