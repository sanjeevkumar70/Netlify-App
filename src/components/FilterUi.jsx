import React from 'react'
import './FilterUi.css'
const FilterUi = () => {
  return (
    <div className='my-5'>
        <form className='form-box'>
            <h3>Filter Results</h3>
            <label htmlFor="">Name (contains)</label> <br /> <br />
            <input type="text" placeholder='Text String' /> <br /> <br />
            <label htmlFor="">Name (contains)</label> <br /> <br />
            <input type="text" placeholder='Text String' /> <br /> <br />
            <label htmlFor="">Order By</label> <br /> <br />
            <select name="" id="">
            <option value="">Order By</option>
            <option value="">Release Date</option>
            <option value="">Score</option>
            <option value="">Name</option>
            </select>

        </form>
    </div>
  )
}

export default FilterUi