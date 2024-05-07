const Navbaar =()=>{
 return(
    <nav style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 45px',
        boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
    }}>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    }}>
      <img
      src="./img/logo.png"
      width="60"
        
      />
      <h1>CodingHub</h1>
    </div>
    <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        
    }}>
        <li style={{
             
            display: 'flex',
            alignItems:'center',
            padding: 32,
            "&:hover":{

                backgroundColor: 'red'
            }

        }}>
            <a href="#" style={{
                textDecoration: 'none',
                color: '#323232',
                fontSize: 17,
                
            }}>Home</a>
        </li>

        <li style={{
             
             display: 'flex',
             alignItems:'center',
             padding: 32,
             "&:hover":{
 
                 backgroundColor: 'red'
             }
 
         }}>
             <a href="#" style={{
                 textDecoration: 'none',
                 color: '#323232',
                 fontSize: 17,
                 
             }}>Teachers</a>
         </li>


         <li style={{
             
            display: 'flex',
            alignItems:'center',
            padding: 32,
            "&:hover":{

                backgroundColor: 'red'
            }

        }}>
            <a href="#" style={{
                textDecoration: 'none',
                color: '#323232',
                fontSize: 17,
                
            }}>Holidays</a>
        </li>


         <li style={{
             
            display: 'flex',
            alignItems:'center',
            padding: 32,
            "&:hover":{

                backgroundColor: 'red'
            }

        }}>
            <a href="#" style={{
                textDecoration: 'none',
                color: '#323232',
                fontSize: 17,
                
            }}>Contact us</a>
        </li>
          
         
        
    </ul>
    </nav>
 )
}
export default Navbaar