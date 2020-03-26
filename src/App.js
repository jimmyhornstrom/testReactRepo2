import React from 'react';
import Message from './Components/Message';
import Product from './Components/Product';
import FruitList from './Components/FruitList';
import AdressList from './Components/AdressList';
import NewsList from './Components/NewsList';
import EventComponent from './Components/EventComponent';

function App() {

  let fruits = ["Banan","Äpple","Apelsin", "Päron", "Hej", "Hopp", "test"];
  let people = [{name: "lisa", email:"lisa@gmail.com", phone:"0702313213"},
  {name: "kalle", email:"kalle@nackademin.se", phone:"07032132132"}];
  
  let news = [{title: "Ny version av React", text:"Det har kommit en uppdatering av React..."},
              {title: "Ny lag om tv-licens", text:"Nu dras licensen direkt ....."}];

  return (<>
  <Message msg="Kuk" date="2019-03-18" />
  <Message msg="Bög" />
  <Message msg="Fitta" />
  <Product>Penis</Product>
  <FruitList arr={fruits} />
  <AdressList array={people}/>
  <NewsList news = {news}/>
  <EventComponent />
    
  </>
  );
}

export default App;
