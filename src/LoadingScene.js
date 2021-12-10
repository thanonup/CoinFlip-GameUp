import React, { useState , useEffect } from 'react';
import { View, Text , StyleSheet , Button , Image , TouchableOpacity} from 'react-native';

const coin01 = require('./image/coin-01.png')
const coin02= require('./image/coin-02.png')

const ImgCoin = [coin01,coin02];

const randomAnser = () =>{
    const rndNum = Math.round(Math.random()*1)
    return rndNum
}

const BGcolors = ['#55efc4','#81ecec','#74b9ff']

const SelectType = (select) =>{
    if(select === 0)
        return 'คุณเลือก หัว'
    else
        return 'คุณเลือก ก้อย'
}

const CheckAnswer = (select,answer) =>{
    if(select == answer)
        return <Text style={{color: 'green'}}>ถูก</Text>
    else
        return <Text style={{color: 'red' }}>ผิด</Text>
}

const LoadingScene = ({coinState,doOnClick}) => {

    const [counter, setCounter] = useState(3)
    useEffect(() => {
        if(counter === 0) return;
        const timer = setTimeout(() => {
            setCounter(prv => prv - 1)
        }, 500);

        return () => {
            clearTimeout(timer)
        }
    }, [counter])

    const answer = randomAnser()
    
    return counter === 0 ? (
                <View style={styles.content}>
                    <Text style={styles.answer}>คำตอบคือ {CheckAnswer(coinState,answer)} </Text>
                    <Image  style={styles.image} source={ImgCoin[answer]}/>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => doOnClick()}
                    >
                        <Text style={styles.textButton}>เล่นใหม่อีกครั้ง</Text>
                    </TouchableOpacity>
                </View>
            ) :  
            <View  style={StyleSheet.compose({ backgroundColor : BGcolors[counter -1]},styles.container)}>
                <Text style={styles.counter}>Loading..</Text>
                <Text style={styles.counter}>{SelectType(coinState)}</Text>
                <Text style={styles.counter}>{counter}</Text>
            </View>
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    content:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffda79',
        flex: 1,
    },
    counter:{
        fontFamily : 'Olylum',
        fontSize: 50,
        color: 'white',
    },
    answer:{
        fontSize: 40,
        padding: 30,
        fontWeight: 'bold',
        fontFamily: 'FcMinimal'
    },
    image:{
        width: 150,
        height: 150,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#192a56',
        marginTop : 50,
        paddingVertical: 10,
        paddingHorizontal : 20,
      },
      textButton: {
        color: '#fbc531',
        fontWeight: 'bold',
      },
})


export default LoadingScene;
