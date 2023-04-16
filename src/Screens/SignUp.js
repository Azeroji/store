import React from 'react'

const SignUp = () => {

  const accs = require("../Data/accounts.json")

  const [show, setShow] = React.useState(false)

  const [account, setAccount] = React.useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:""
  })



  function handleChange(event){
      const {name,value} = event.target
      setAccount((account) => { return {
          ...account,
          [name] : value
      }
  })}

  return (
    <div className='flex justify-center'>
        
      <div className='mt-[2vw] lg:drop-shadow-2xl xl:h-[75vh] w-[100%] lg:w-[60vw] bg-[white] rounded-[18px] flex content-clip p-[10px]'>

        <div className='hidden xl:flex w-[30%] p-[40px] bg-primary flex-y justify-center pt-[5%] rounded-[10px] relative '>
        <div>
          <p className='text-white font-bold text-[28px] leading-[40px]'>Start your journey with us.</p>
          <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Discover our set of high quality tech products</p>
        </div>
        <div className='absolute bottom-[5%] text-center'>
        <p className='text-[#eeeeee] mt-[10px] font-regular text-[16px]'>Already have an account?</p>
        <a href="/signin" className='cursor-pointer text-[#eeeeee] mt-[10px] font-regular text-[16px] hover:underline'>Sign in</a>
        </div>
        </div>
        <div className='w-[100%] xl:w-[70%] flex items-center justify-center'>

          <div className='w-[100%] xl:w-[70%]'>
          <p className='font-bold text-[28px] mb-[5%] text-center'>Sign up</p>
            <form>
              <div className='flex justify-between w-[100%]'>
                <div className='w-[45%]'>
                  <p>First Name</p>
                  <input onChange={handleChange} placeholder="First Name" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] md:w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
                </div>
                <div className='w-[45%]'>
                  <p>Last Name</p>
                  <input onChange={handleChange} placeholder="Last Name" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] md:w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
                </div>
              </div>
              <p>Username</p>
              <input onChange={handleChange} placeholder="Username" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="email" type="email" />
              <p>Email</p>
              <input onChange={handleChange} placeholder="Email" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="email" type="email" />


              <div className='flex justify-between w-[100%]'>
                <div className='w-[46%]'>
                <p>Password</p>
              <div className='relative w-[100%]'>
                <input onChange={handleChange} placeholder="Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
              </div>
                </div>
                <div className='w-[46%]'>
                <p>Confirm Password</p>
              <div className='relative w-[100%]'>
                <input onChange={handleChange} placeholder="Confirm Password" className="bg-[#ededed] rounded-[4px] h-[40px] text-[14px] my-[10px] w-[100%] focus:outline-none px-[15px]" name="password" type={show ? "text" : "password"} />
                <p className='cursor-pointer text-primary absolute top-[50%] translate-y-[-50%] right-[-25%] font-medium' onClick={() => {setShow(!show)}}> {show ? "hide" : "show"} </p>
              </div>
                </div>
              </div>

              <input className='cursor-pointer my-[10px] bg-primary h-[40px] w-[100%] rounded-[6px] text-[18px] text-[white] font-medium' type="submit" value="Sign Up" />
            </form>
            <div className='flex justify-between w-[100%] items-center text-[gray]'>
              <hr width="45%"/>
              <p>or</p>
              <hr width="45%"/>
            </div>
            <button className='my-[10px] flex items-center gap-x-[10px] bg-white border-[gray] border h-[40px] w-[100%] justify-center rounded-[6px]'>
              <img src="./assets/content/google-logo.png" width="22px" />
              <p className='text-[18px] text-[black] font-medium'>Continue with google</p>
            </button>
          </div>

        </div>
          
      </div>

    </div>
  )
}

export default SignUp