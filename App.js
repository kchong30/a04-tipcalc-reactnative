import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';




export default function App() {
  const [serviceCostAmountInput, setServiceCostAmountInput] = useState('');
  const [tipSelectedAmount, setTipSelectedAmount] = useState(10.0);
  const amount = parseFloat(serviceCostAmountInput) || 0.0;
  const tip = calculateTip(amount, tipSelectedAmount);
  const total = amount + tip;

  const randomizeBillAmount = () => {
    const randomAmount = Math.random() * 2000;
    setServiceCostAmountInput(randomAmount.toFixed(2));
  };

  function calculateTip(amount, tipPercent) {
    return (tipPercent / 100) * amount;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tip Calculator</Text>
      <Button onPress={randomizeBillAmount} style={styles.randomText} title="Randomize Bill Amount Between $0 and $2000" >
      </Button>
      <TextInput
        style={styles.input}
        value={serviceCostAmountInput}
        onChangeText={text => setServiceCostAmountInput(text)}
        inputMode = 'numeric'
      />
      <RadioButton.Group
        onValueChange={value => setTipSelectedAmount(value)}
        value={tipSelectedAmount}
      >
        <View style={styles.radioButtonRow}>
          <RadioButton.Item label="10%" value={10.0} />
          <RadioButton.Item label="15%" value={15.0} />
        </View>
        <View style={styles.radioButtonRow}>
          <RadioButton.Item label="20%" value={20.0} />
          <RadioButton.Item label="25%" value={25.0} />
        </View>
      </RadioButton.Group>
      <Text>Bill Amount: ${amount.toFixed(2)}</Text>
      <Text>Tip Amount: ${tip.toFixed(2)}</Text>
      <Text>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    marginBottom: 24,
  },
  radioButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8,
  },
  randomText: {
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
})