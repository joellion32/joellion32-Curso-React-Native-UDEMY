import { useRef, useState } from 'react'

enum Operator {
    add,
    subtract,
    mutiply,
    divide,
}


export const useCalculator = () => {

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
    }

    const lastOperation = useRef<Operator>();

    // Borrar el ultimo numero
    const deleteOperation = () => {

        let deleteLastNumber = number.slice(0, -1)

        if (deleteLastNumber === null || deleteLastNumber === '' || deleteLastNumber === '-') {
            setNumber('0')
            return
        }

        setNumber(deleteLastNumber)
    }

    // pintar numeros en pantalla
    const buildNumber = (numberString: string) => {

        // logica para que solo agregue un punto
        if (number.includes('.') && numberString === '.') return;

        // Punto decimal 
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString)
            }

            // Evaluar si es otro cero y no hay punto 
            if (numberString == '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }

            // Evaluar  si es diferente de cero, no hay punto, y es el primer numero
            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            // Evitar 00000000000
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString)
    }

    // cambiar ultimo numero
    const setLastNumber = () => {
        caculateResult()

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }

        setNumber('0')
    }

    // dividir
    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide
    }

    // multiplicar 
    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.mutiply
    }

    // restar
    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.subtract
    }

    // sumar 
    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add
    }

    // cambiar signos positivo a negativos viceversa 
    const toogleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number)
    }

    // calcular resultado
    const caculateResult = () => {
        const num1 = Number(number)
        const num2 = Number(prevNumber)

        switch (lastOperation.current) {
            case Operator.add:
                setNumber(`${num1 + num2}`)
                break
            case Operator.subtract:
                setNumber(`${num2 - num1}`)
                break
            case Operator.divide:
                setNumber(`${num2 / num1}`)
                break
            case Operator.mutiply:
                setNumber(`${num1 * num2}`)
                break
            default:
                throw new Error('Operation not implemented')
        }

        setPrevNumber('0')
    }

    return {
        // Properties
        number,
        prevNumber,

        // Methods 
        buildNumber,
        deleteOperation,
        clean,
        toogleSign,
        addOperation,
        subtractOperation,
        multiplyOperation,
        divideOperation,
        caculateResult
    }
}

