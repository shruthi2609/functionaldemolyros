function SignUpComponent(){
    const {value,handleChange}=useInput()
    return(
        <>
        Username:<input type='text' onChange={(e)=>handleChange(e)}></input>
        Password:<input type='text' onChange={(e)=>handleChange(e)}></input>
        Re-Enter Password:<input type='text' onChange={(e)=>handleChange(e)}></input>
        <button>Signup</button>
        </>
    )
}
export default SignUpComponent