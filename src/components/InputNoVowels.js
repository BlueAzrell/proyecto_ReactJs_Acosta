const InputNoVowels = () => {

  const KeyDownHandler = ( event ) => {

    const vowels = ['a', 'e', 'i', 'o', 'u']
    if(vowels.includes(event.key.toLowerCase()) ) {
        event.preventDefault()
    }
    console.log( event );

  }

  return (
    <div>
        <h3> Input sin vocales</h3>
        <input onKeyDown= { KeyDownHandler }  type='text'/>
    </div>
  )
}
export default InputNoVowels