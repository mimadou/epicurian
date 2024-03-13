import axios from 'axios';
import React, { useState } from 'react';

const ReservationForm = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [date , setDate] = useState("")
    const [time , setTime] = useState("")
    const [numberOfPeople , setNumberOfPeople] = useState("")
 
   
    const handleBook = (e)=>{
        e.preventDefault();

        axios
        .post("http://localhost:3009/api/reservation" , {
            name,
            email,
            phoneNumber,
            date,
            time,
            numberOfPeople
        })

        .then(res =>{
            console.log("reservation crée" , res.data)
            alert("votre reservation a été enregistré ")
            setName("")
            setEmail("")
            setPhoneNumber("")
            setDate("")
            setTime("")
            setNumberOfPeople("")
        })

        .catch(error=> {
            console.log("reservation échouée ", error)
            alert(" votre reservation n'a pas été crée")
        })




    }
    




    return (

        <div className='bookingReservation'>
            <h2> RESERVER VOTRE TABLE </h2>
            <form action="" className='formBooking' onSubmit={handleBook} >
                <div>
                    <input 
                    type="text" 
                    placeholder='Name'
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    required />
                </div>

                 <div>
                    <input 
                    type='email' 
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required/>
                </div>

                 <div>
                    <input 
                    type="tel" 
                    placeholder='Numero de téléphone'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    required />
                </div>
                 
                 <div className='date-time'>
                  <input 
                  type="date" 
                  placeholder='date de reservation'
                  onChange={(e)=> setDate(e.target.value)}
                  value={date} 
                  required/>

                  <input 
                  type="time"  
                  placeholder=" heure d'arrivé "
                  onChange={(e) => setTime(e.target.value)}
                  value={time}
                  required/>

                 </div>

                <div>
                    <label>
                    <select 
                    name="" 
                    id=""
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    value={numberOfPeople}  >
    
                    <option value="" >choisir le nombre de personnes </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                    </label>
                    
                </div>

                <div>
                    <input type="submit" value=" Reservez  " className='reserverSubmit' />
                </div>


            </form>
            
        </div>
    );
};

export default ReservationForm;