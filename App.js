import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import useInput from './hooks/useInput'

export default function App() {
  const [nombre, bindNombre] = useInput('')
  const [apellido, bindApellido] = useInput('')

  return (
    <View style={styles.container}>
      <Text>{nombre}</Text>
      <TextInput style={styles.input} {...bindNombre} />
      <Text>{apellido}</Text>
      <TextInput style={styles.input} {...bindApellido} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: '90%',
    borderColor: '#000',
    padding: 15,
    marginBottom: 10,
  },
})
