import React from 'react'
import './CarDetailModal.css'

const CarDetailModal = ({ isOpen, onClose, handleSubmit}) => {
    if (!isOpen) return null

    return (
        <div>
            <div className="modal fade show" style={{ display: 'block' }}>
                <div className="modal-dialog custom-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Expand Your Fleet</h5>
                            <button type="button" className="close" onClick={onClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{ padding: ' 10px 40px' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2 mb-3 add-car-row-field">
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Car Name
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="911 Carrera S"
                                            required
                                        />
                                    </div>
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Car Rate
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="$500/Day"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 add-car-row-field">
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Manufactured By
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Porsche"
                                            required
                                        />
                                    </div>
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Manufacture Year
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="2018"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 add-car-row-field">
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Engine CC
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="2000CC"
                                            required
                                        />
                                    </div>
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Car Type
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Sedan"
                                            required
                                        />
                                    </div>
                                    <div className='addCar-field-container'>
                                        <label htmlFor="/">
                                            Transmission
                                        </label>
                                        <select name="transmission" id="transmission" className="form-control" required>
                                            <option value="manual">Manual</option>
                                            <option value="automatic">Automatic</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3 mt-4" style={{display:"flex", justifyContent:'space-between', gap:'30px'}}>
                                    <div style={{width:"200px"}}>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Porsche"
                                        />
                                    </div>
                                    <div className='addCar_submit-btn-container'>
                                        <button type="submit" className="CarModal-submit-button">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailModal