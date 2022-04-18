const White_keys = ['z','x','c','v','b','n','m']
const Black_keys = ['s','d','h','j','k']



const keys = document.querySelectorAll('.key')
const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key=> {
    key.addEventListener('click', () => playNote(key))
    console.log(key)
});


document.addEventListener('keydown',e=>{
    const key = e.key
    const whiteKeyindex = White_keys.indexOf(key)
    const blackKeyindex = Black_keys.indexOf(key)

    if(whiteKeyindex >-1) playNote(whitekeys[whiteKeyindex])
    if(blackKeyindex >-1) playNote(blackkeys[blackKeyindex])
})

  function playNote(key){
      const noteAudio = document.getElementById(key.dataset.note)
      noteAudio.currentTime =0
      noteAudio.play();
      
      key.classList.add('active')
      noteAudio.addEventListener('ended',()=>{
          key.classList.remove('active')
      })
  }