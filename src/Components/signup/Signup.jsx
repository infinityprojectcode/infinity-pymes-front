import './signup.css';
import ImagenFondo from '@assets/images/ImagenConVector.jpg'

function Signup() {
    return (
        <div className='h-screen w-full relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
                {/* <img className='absolute inset-0 object-cover h-full w-full' src='https://wallpapercave.com/wp/wp3172267.jpg' alt='Background' /> */}
                <img className='absolute inset-0 object-cover h-full w-full' src={ImagenFondo} alt='Background' />
            </div>
            <div className='grid place-content-center h-screen w-full z-90'>
                <div className='flex min-h-fit w-[30rem] glass-efect'>
                    <section className='h-full w-full rounded-[1.7rem] border border-white p-4 '>
                        <div className='grid w-full place-content-center'>
                            <div className='w-full mb-4'>
                                <h1 className=' text-white text-center text-3xl decoration-inherit font-medium '>
                                    Registrate
                                </h1>
                            </div>
                            <div className='grid m-2'>
                                <label className='text-lg font-base' >Nombre Completo</label>
                                <input type='text' autoComplete='off' name='text' className='input' placeholder='Name'></input>
                            </div>
                            <div className='grid m-2'>
                                <label className='text-lg font-base' >Correo electronico</label>
                                <input type='text' autoComplete='off' name='text' className='input' placeholder='Name'></input>
                            </div>
                            <div className='grid m-2'>
                                <label className='text-lg font-base'>Nombre Usuario</label>
                                <input type='text' autoComplete='off' name='text' className='input' placeholder='Username'></input>
                            </div>
                            <div className='grid m-2'>
                                <label className='text-lg font-base'>Contraseña</label>
                                <input type='text' autoComplete='off' name='text' className='input' placeholder='Password'></input>
                            </div>
                            <div className='grid'>
                                {/* <button className='text-base bg-cyan-500 hover:bg-cyan-600 rounded-full p-2 text-white'>
                                    Ingresar
                                </button> */}
                                <button className='btn m-8'>
                                    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                    </svg>

                                    <span className='text'>Registrar</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}


export default Signup;