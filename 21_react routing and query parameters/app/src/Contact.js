function Contact(p){

  console.log(p);
  console.log(p.location.search);

  let params={};
  let temp=new window.URLSearchParams(p.location.search);
  for(let [key,value] of temp){
    params[key]=value;
  }
  console.log(params);

  return (
      <div>
        {params.info==="phone" && <p>Phone: 0544444444</p>}
        {params.info==="mail" && <p>Email: ariel@gmail.com</p>}
      </div>
  );
}

export default Contact;
