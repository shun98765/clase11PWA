export const operaciones=(numeros, setNumeros)=>{
    const {numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8}= numeros;
    const handleChange =(e)=>{
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value),
        });

    };
    const suma =()=>numero1+numero2 ;
    const resta =()=>numero3-numero4 ;
    const multi =()=>numero5*numero6 ;
    const divi = () => {
        if (numero8 === 0) {
            return "División indefinida";
        }
        return numero7 / numero8;
    };

    return{
        handleChange,
        suma,
        resta,
        multi,
        divi,
        numero1,
        numero2,
        numero3,
        numero4,
        numero5,
        numero6,
        numero7,
        numero8
    }
}