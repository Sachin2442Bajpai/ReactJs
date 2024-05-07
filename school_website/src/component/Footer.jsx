 const Footer =()=>{
    return(
         <footer style={{
            padding: '60px 100px',
            background: '#03011c',
            display: 'flex',
            gap: '48'
         }}>
          <div style={{width: '100%'}}>
            <h2 style={{
               color: '#f5f5f5',
               fontWeight: '500'
            }}>Codinghub</h2>
            <p style={{
               color: 'white'
            }}>“Work as hard as you can and then be happy in the knowledge you couldn’t have done any more.” </p>
          </div>

          <div style={{width: '100%'}}>
            <h2 style={{
               color: '#f5f5f5',
               fontWeight: '500'
            }}>Usefull links</h2>
            <ul style={{
               padding: 0 ,
               margin: 0 ,
               display: 'flex' ,
               flexDirection: 'column',
               gap: 8
            }}>
               <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                  }}>Home</a></li>

                  <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Teachers</a></li>

                  <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Holidays</a></li>

                 <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Contact</a></li>


                 <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Talk to us</a></li>
            </ul>
          </div>


          <div style={{width: '100%'}}>
            <h2 style={{
               color: '#f5f5f5',
               fontWeight: '500'
            }}>Social links</h2>
            <ul style={{
               padding: 0 ,
               margin: 0 ,
               display: 'flex' ,
               flexDirection: 'column',
               gap: 8
            }}>
               <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                  }}>Youtube</a></li>

                  <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Facebook</a></li>

                  <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Linkedin</a></li>

                 <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Instagram</a></li>

                  <li><a href="#" style={{
                  color: 'white',
                  textDecoration: 'none'
                   }}>Twitter</a></li> 
            </ul>
          </div>

          <div style={{width: '100%'}}>
            <h2 style={{
               color: '#f5f5f5',
               fontWeight: '500'
            }}>Enquiry</h2>
            <form style={{
            display: 'flex',
             flexDirection: 'column',
              gap: 12
            }}>
               <input 
               name="fullname"
               placeholder="fullname"
               required
               style={{
                 border: 'none' ,
                 padding: 12,
                 borderRadius: 4
               }}
                />
                <input 
               name="email"
               placeholder="example@gmail.com"
               required
               style={{
                 border: 'none' ,
                 padding: 12,
                 borderRadius: 4
               }} 
               />
               <textarea
               name="message"
               placeholder="Message"
               required
               style={{
                 border: 'none' ,
                 padding: 12,
                 borderRadius: 4
               }} 
               />
               <button style={{
                  width: 'fit-content' ,
                  border: 'none',
                  background: 'orange' ,
                  color: 'white' ,
                  borderRadius: 4 ,
                  padding: '12px  24px'
               }}>submit</button>

            </form>
            
          </div>
 
         </footer>
    )

 }
 export default Footer