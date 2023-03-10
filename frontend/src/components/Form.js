import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form(props) {

    const[usecase_name, setName] = useState(props.usecase.usecase_name)
    const[usecase_shortcode, setShortcode] = useState(props.usecase.usecase_shortcode)
    const[usecase_startDate, setStartDate] = useState(props.usecase.usecase_startDate)

    useEffect(() => {
        setName(props.usecase.usecase_name)
        setShortcode(props.usecase.usecase_shortcode)
        setStartDate(props.usecase.usecase_startDate)
    },[props.usecase])

    const updateUsecase = () => {
        APIService.UpdateUsecase(props.usecase.usecase_id,{usecase_name,usecase_shortcode, usecase_startDate})
        .then(resp => console.log(props.updatedData(resp)))
        .catch(error => console.log(error))
    }

    const insertUsecase = () => {
        APIService.InsertUsecase({usecase_name,usecase_shortcode,usecase_startDate})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.usecase ? (
                <div className='mb-3'>
                    
                    <label htmlFor='usecase_name' className='form-label'>Usecase Name</label>
                    <input type='text' className = 'form-control' 
                    value={usecase_name} 
                    placeholder='Enter usecase name'
                    onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor='usecase_shortcode' className='form-label'>Usecase Shortcode</label>
                    <input type='text' className = 'form-control' value={usecase_shortcode} 
                    placeholder='Enter usecase shortcode'
                    onChange={(e) => setShortcode(e.target.value)}/>
                    
                    <label htmlFor="usecase_startDate" className='form-label'>Usecase start date</label> 
                    <input type="date" className = 'form-control' 
                    value={usecase_startDate} 
                    onChange={(e) => setStartDate(e.target.value)}/>
                    {
                        props.usecase.usecase_id ? <button onClick={updateUsecase} className='btn btn-success mt-3'>Update</button> 
                        :
                         <button onClick={insertUsecase} className='btn btn-success mt-3'>Insert</button> 

                    }
                    

                </div>
            ) : null

            }
        </div>
    )
}

export default Form