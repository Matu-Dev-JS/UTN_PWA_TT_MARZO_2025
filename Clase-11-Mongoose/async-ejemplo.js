const getNumber = async () => {
    return 1
}

const sumarAsync = async () => {
    console.log('estoy sumando')
    const numero1 = await getNumber()
    const numero2 = await getNumber()

    console.log(numero1 + numero2)
    console.log('sigo sumando')
}
console.log("Paso: 1")
sumarAsync()
console.log('Paso: 2')