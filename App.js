import { GluestackUIProvider, Text, Box, Input, FormControl, FormControlLabel, FormControlLabelText, InputField, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import styles from './style';

export default function App() {
  const [valorLitro, setValorLitro] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  const executar = (valorLitro,quantidade,km) =>{
    let quantidad = parseInt(quantidade);
    let valor = parseInt(valorLitro);
    let quilo = parseInt(km)
    let dim = (valor * quantidad);
    let ks = ( dim / quilo);
    setResultado("R$"+ks.toFixed(2)+"/km");
  }
  const limpar = (valorLitro,quantidade,km) =>{
    setKm("");
    setQuantidade("");
    setValorLitro("");
    setResultado("")
  }
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" bg='#B19994' justifyContent="center" alignItems="center" h={"$full"}>
        <FormControl>
          <Text style={styles.titulo}>Autonomia do Gasto de Combustível</Text>
          <FormControlLabel pt={30}>
            <FormControlLabelText>
              Valor Litro
            </FormControlLabelText>
          </FormControlLabel>
          <Input bg='#D3C0CD' borderColor='#000' borderRadius={15}>
            <InputField style={styles.textoInput} value={valorLitro} onChangeText={setValorLitro} keyboardType='numeric'/>
          </Input>
          <FormControlLabel pt={30}>
            <FormControlLabelText>
              Quantidade Abastecida
            </FormControlLabelText>
          </FormControlLabel>
          <Input bg='#D3C0CD' borderColor='#000' borderRadius={15} >
            <InputField style={styles.textoInput}  value={quantidade} onChangeText={setQuantidade} keyboardType='numeric'/>
          </Input>
          <FormControlLabel pt={30}>
            <FormControlLabelText>
              Km Rodado
            </FormControlLabelText>
          </FormControlLabel>
          <Input bg='#D3C0CD' borderColor='#000' borderRadius={15}>
            <InputField style={styles.textoInput} value={km} onChangeText={setKm} keyboardType='numeric'/>
          </Input>
          <Box justifyContent="space-around" display="flex" flexDirection="row" pt={30}>
            <Button bgColor='#937666' onPress={() => executar(valorLitro,quantidade,km)}>
              <ButtonText>Calcular</ButtonText>
            </Button>
            <Button bgColor='#937666' onPress={() => limpar(valorLitro,quantidade,km)}>
              <ButtonText>Limpar</ButtonText>
            </Button>
          </Box>
          <Box justifyContent="space-around" display="flex" flexDirection="row" pt={30}>
            <Text style={styles.result}>Resultado:</Text>
            <Text style={styles.result} fontWeight="$bold">{resultado}</Text>
          </Box>
        </FormControl>
      </Box>
    </GluestackUIProvider>
  );
}