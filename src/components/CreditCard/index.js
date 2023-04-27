import {useState} from 'react'

import {
  MainBgCont,
  MainBgCont1,
  MainBgCont2,
  Heading,
  Line,
  Image,
  CardNum,
  HolderName,
  CardHolderName,
  Head2,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const onClickCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onClickCardHolder = event => {
    setName(event.target.value)
  }

  const val = name.toUpperCase()
  console.log(val)

  return (
    <MainBgCont>
      <MainBgCont1>
        <Heading>Credit Card</Heading>
        <Line />
        <Image data-testid="creditCard">
          <CardNum>{cardNumber}</CardNum>
          <HolderName>CARDHOLDER NAME</HolderName>
          <CardHolderName>{val}</CardHolderName>
        </Image>
      </MainBgCont1>
      <MainBgCont2>
        <Head2>Payment Method</Head2>
        <Input
          type="text"
          placeholder="Card Number"
          onChange={onClickCardNumber}
          value={cardNumber}
        />
        <Input
          type="text"
          placeholder="Cardholder Name"
          onChange={onClickCardHolder}
          value={name}
        />
      </MainBgCont2>
    </MainBgCont>
  )
}

export default CreditCard
