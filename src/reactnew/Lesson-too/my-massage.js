import React, { useState } from "react";

function MessageToo(){

  const [name, setName] =useState('');
  const [phone, setPhone] =useState('');
  const [massage, setMassage] =useState('');


function btnMeassage(){

if(name.trim() && phone.trim()){
 setMassage(`Здравствуйте ${name} phone ${phone}`)

} else{

  setMassage('Заполниете поля')
}


}


function btnMeassageclear(){
setName('');
setPhone('');
setMassage('');

}

  return(


    <div>
<input
placeholder="name"
value={name}
onChange={(e)=>setName(e.target.value)}
></input>

<input
placeholder="name"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
></input>


<button onClick={btnMeassage}>
  отправить
</button>

<button onClick={btnMeassageclear}>
  Отчистить
</button>


{ massage && (
<p>
  {massage}
</p>
)

}
    </div>
  )



}


export default MessageToo;