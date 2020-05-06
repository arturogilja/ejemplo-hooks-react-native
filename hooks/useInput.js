import { useState } from 'react'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const bind = {
    value,
    onChangeText: (text) => {
      setValue(text)
    },
  }

  return [value, bind]
}

export default useInput
