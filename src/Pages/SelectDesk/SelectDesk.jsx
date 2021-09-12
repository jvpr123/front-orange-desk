// Importing modules:
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Import components:
import ConsultorHeader from '../.././Components/ConsultorHeader/ConsultorHeader'
import DesksLayoutImg from './../../Assets/desks-layout.svg'

// Importing style-sheets:

const SelectDesk = () => {

    const inputStyle = {
        backgroundColor: '#F4F4F4'
    }

    const accordionHeader = {
        color: '#404099'
    }

    const [value, setValue] = useState('')
    const HandleChange = (e) => setValue(e.target.value)

    useEffect(() => {
        const btnSelectDesk = document.getElementById('btnSelectDesk')
        if ((value !== '' && value !== undefined) && value.length <= 2 && (Number(value) >= 1 && Number(value) <= 40)) {
            btnSelectDesk.removeAttribute('disabled')
            btnSelectDesk.setAttribute('style', 'background-color: #FE4400; color: white')
        }
        else {
            btnSelectDesk.setAttribute('disabled', '')
            btnSelectDesk.setAttribute('style', 'background-color: #EAEAEA; color: #6A6A6A')
        }
    }, [HandleChange])

    return (
        <React.Fragment>

            <div className="container-fluid">
                <ConsultorHeader currentStep={'desk'} />

                <div className="container my-3 text-center">
                    <p>Escolha sua estação de trabalho.</p>
                    <img className='img-fluid' src={DesksLayoutImg} alt="Imagem com layout das mesas" />
                    <form className='mt-3'>
                        <input onChange={HandleChange}
                            type='text'
                            style={inputStyle}
                            className=' text-center form-control border-0 shadow-none'
                            placeholder='Digite o nº da mesa (01 a 40)'
                            maxLength={2}
                            required />
                            {(value !=='' && Number(value) < 1 || Number(value) > 40) && <span className='text-danger'>Valor deve estar entre 1 e 40</span>}

                        <div class="accordion accordion-flush mt-3 mb-5" id="accordionFlush">
                            <div class="accordion-item text-center">
                                <p class="accordion-header" id="flush-showDesks">
                                    <button style={accordionHeader} class="collapsed bg-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Mostrar mesas disponíveis
                                    </button>
                                </p>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-showDesks" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body">01 | 02 | 03</div>
                                </div>
                            </div>
                        </div>

                        <Link to='/' className='text-decoration-none'>
                            <button id='btnSelectDesk' className='form-control border-0 shadow-none' disabled >
                                Escolher estação de trabalho
                            </button>
                        </Link>
                    </form>
                </div>

            </div>

        </React.Fragment>
    )
}

export default SelectDesk;